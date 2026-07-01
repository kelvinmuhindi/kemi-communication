import { NextRequest, NextResponse } from "next/server";
import { sendEmailNotification } from "@/lib/email";
import { sendWhatsAppNotification } from "@/lib/whatsapp";
import { isValidEmail, escapeHtml } from "@/lib/validation";

const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      name,
      email,
      phone,
      vehicleType,
      vehicleCount,
      plateNumbers,
      availableRoutes,
      message,
    } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeVehicleType = escapeHtml(vehicleType || "Not specified");
    const safeVehicleCount = escapeHtml(String(vehicleCount || "Not specified"));
    const safePlates = escapeHtml(plateNumbers || "Not specified");
    const safeRoutes = escapeHtml(availableRoutes || "Not specified");
    const safeMessage = escapeHtml(message || "");

    const html = `
      <h2 style="font-family:sans-serif;color:#1a1a1a;">New Partner Application</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px 0;color:#666;width:160px;vertical-align:top;"><strong>Name</strong></td><td style="padding:8px 0;">${safeName}</td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top;"><strong>Email</strong></td><td style="padding:8px 0;">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top;"><strong>Phone</strong></td><td style="padding:8px 0;">${safePhone}</td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top;"><strong>Vehicle Type</strong></td><td style="padding:8px 0;">${safeVehicleType}</td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top;"><strong>Number of Vehicles</strong></td><td style="padding:8px 0;">${safeVehicleCount}</td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top;"><strong>Plate Numbers</strong></td><td style="padding:8px 0;">${safePlates}</td></tr>
        <tr><td style="padding:8px 0;color:#666;vertical-align:top;"><strong>Available Routes</strong></td><td style="padding:8px 0;">${safeRoutes}</td></tr>
        ${safeMessage ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top;"><strong>Additional Notes</strong></td><td style="padding:8px 0;">${safeMessage}</td></tr>` : ""}
      </table>
    `;

    const emailResult = await sendEmailNotification({
      subject: `Partner Application — ${safeName}`,
      html,
      replyTo: email,
    });

    const whatsappResult = await sendWhatsAppNotification(
      `New partner application from ${safeName}:\nPhone: ${safePhone}\nVehicle: ${safeVehicleType} (x${safeVehicleCount})\nRoutes: ${safeRoutes}`
    );

    return NextResponse.json({
      success: true,
      email: emailResult.sent,
      whatsapp: whatsappResult.sent,
    });
  } catch (error) {
    console.error("[partner] Unhandled error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
