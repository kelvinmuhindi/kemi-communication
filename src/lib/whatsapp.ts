// WhatsApp Business Cloud API notification helper.
//
// This is wired up and ready to use, but INACTIVE until the following
// environment variables are set in Vercel (Project Settings > Environment
// Variables):
//
//   WHATSAPP_ACCESS_TOKEN   - permanent or long-lived access token
//   WHATSAPP_PHONE_NUMBER_ID - the "Phone number ID" from Meta's dashboard
//   WHATSAPP_NOTIFY_TO       - the phone number (with country code, no
//                               "+" or spaces, e.g. 254704881748) that
//                               should receive notifications
//
// See README.md "WhatsApp Notifications Setup" for how to obtain these.
//
// If these variables are not set, sendWhatsAppNotification() silently
// skips sending and logs a warning, it never throws, so the rest of the
// form submission (email, success response) still works normally.

type WhatsAppSendResult = {
  sent: boolean;
  reason?: string;
};

export async function sendWhatsAppNotification(
  message: string
): Promise<WhatsAppSendResult> {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const notifyTo = process.env.WHATSAPP_NOTIFY_TO;

  if (!accessToken || !phoneNumberId || !notifyTo) {
    console.warn(
      "[whatsapp] Skipped: WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID, " +
        "or WHATSAPP_NOTIFY_TO is not set. See README for setup steps."
    );
    return { sent: false, reason: "not_configured" };
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: notifyTo,
          type: "text",
          text: { body: message },
        }),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("[whatsapp] Send failed:", response.status, errorBody);
      return { sent: false, reason: "api_error" };
    }

    return { sent: true };
  } catch (error) {
    console.error("[whatsapp] Send threw an error:", error);
    return { sent: false, reason: "network_error" };
  }
}
