export const STUDIO = {
  name: "Bump to babies",
  whatsapp: "9779851224030",
  phone: "+977 9851224030",
  tagline: "From your first dance to your first cry, we capture it all.",
  displayPrices: false,
  address: "27.7012427,85.3398278",
  mapLink: "https://maps.app.goo.gl/u15HPwSQDAH7k8eP6",
  hours: "",
};

export const DEFAULT_MESSAGE = "Hello, I'd like to book a photography session. Can you share availability and packages?";
export function whatsappUrl(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(message)}`;
}
export function packageMessage(type: string, name: string) {
  return `Hello, I'm interested in ${type} photography (${name}). Please share details.`;
}
export type BookingDetails = { name: string; event: string; date: string; location: string; message: string };
export function bookingMessage(details: BookingDetails) {
  return `Hello, my name is ${details.name.trim()}. I'm looking to book a ${details.event}${details.date ? ` on ${details.date}` : ""}${details.location.trim() ? ` in ${details.location.trim()}` : ""}. ${details.message.trim()}`.trim();
}
export const packages = [
  { name: "The Wedding Story", type: "wedding", line: "weddings", description: "Every ritual, every embrace, every beautiful beginning.", features: ["Wedding day photography", "Candid & traditional portraits", "Edited digital collection", "Album options available"] },
  { name: "Before Forever", type: "wedding", line: "weddings", description: "A little adventure. A lot of love. Just the two of you.", features: ["Pre-wedding or engagement session", "Location planning", "Couple portraits", "Edited digital collection"] },
  { name: "The Cinematic Chapter", type: "wedding", line: "weddings", description: "Your wedding day, told in movement and emotion.", features: ["Cinematic wedding film", "Ceremony & celebration coverage", "Highlight film", "Photography options available"] },
  { name: "The Beautiful Wait", type: "maternity", line: "babies", description: "Celebrate the quiet magic of becoming a mother.", features: ["Maternity portrait session", "Studio or outdoor setting", "Styling consultation", "Partner portraits welcome"] },
  { name: "Tiny Beginnings", type: "newborn", line: "babies", description: "Little fingers, sleepy smiles, and a love like no other.", features: ["Gentle newborn session", "Baby-led pace", "Soft wraps & simple styling", "Parent & baby portraits"] },
  { name: "Little Milestones", type: "baby", line: "babies", description: "For the first smiles and all the little things after.", features: ["Baby milestone or cake smash", "Playful, simple setting", "Family portraits", "Edited digital collection"] },
];