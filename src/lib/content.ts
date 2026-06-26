// Centralized site content. Update copy, services, fleet, and contact
// details here without touching component code.

export const siteConfig = {
  name: "Kemi Communications",
  legalName: "Kemi Communications Ltd",
  tagline: "On Time",
  regNumber: "PVT-OD1KDL5V",
  phone: "+254 704 881 748",
  whatsapp: "+254704881748",
  email: "limitedkemi@gmail.com",
  address: "Utawala, Astro Karagita Close, No. 6, Nairobi, Kenya",
  hours: [
    { label: "Mon – Fri", value: "Standard business hours" },
    { label: "Saturday", value: "Until 12 noon" },
    { label: "Sunday", value: "By appointment" },
  ],
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Coverage", href: "#coverage" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "1T–7T", label: "Fleet capacity range" },
  { value: "4+", label: "Regional routes served" },
  { value: "2025", label: "Built on reliability" },
];

export const sneakPeekItems = [
  {
    icon: "truck",
    title: "Services",
    description: "Road freight, corporate hire & logistics solutions",
    href: "#services",
  },
  {
    icon: "truck-loading",
    title: "Our Fleet",
    description: "1-tonne to 7-tonne trucks for every cargo size",
    href: "#fleet",
  },
  {
    icon: "map",
    title: "Coverage",
    description: "Nairobi, Kisumu, Eldoret, Kisii & cross-border",
    href: "#coverage",
  },
  {
    icon: "star",
    title: "Testimonials",
    description: "What our clients say about working with us",
    href: "#testimonials",
  },
  {
    icon: "mail",
    title: "Get a Quote",
    description: "Tell us your route & cargo — we'll respond fast",
    href: "#contact",
  },
];

export const services = [
  {
    number: "01",
    title: "Road Freight Transport",
    description:
      "Scheduled and on-demand haulage for manufacturers, wholesalers and retailers across Kenya and into neighbouring countries.",
  },
  {
    number: "02",
    title: "Cross-Border Logistics",
    description:
      "Documentation-ready cross-border haulage connecting Kenya with regional markets, handled end to end.",
  },
  {
    number: "03",
    title: "Corporate & Bulk Hire",
    description:
      "Dedicated trucks and flexible contracts for businesses with recurring or high-volume transport needs.",
  },
];

export const fleet = [
  {
    name: "1-Tonne Pickup",
    description: "Light cargo & last-mile delivery within urban routes.",
    capacity: "Up to 1,000 kg",
  },
  {
    name: "3 to 5-Tonne Truck",
    description: "Mid-size haulage for regional distribution runs.",
    capacity: "Up to 5,000 kg",
  },
  {
    name: "7-Tonne Truck",
    description: "High-volume freight for bulk and cross-border loads.",
    capacity: "Up to 7,000 kg",
  },
];

export const coverageRoute = ["Nairobi", "Nakuru", "Kisumu", "Eldoret", "Kisii"];

export const coverageStats = [
  { value: "5", label: "Towns & cities on our core network" },
  { value: "Cross-border", label: "Regional routes in active development" },
  { value: "Utawala, Nairobi", label: "Head office & dispatch base" },
];

export const testimonial = {
  quote:
    "Make it happen — that's exactly what Kemi Communications does, every single trip.",
  author: "Valued Client, Kenafric Industries",
};
