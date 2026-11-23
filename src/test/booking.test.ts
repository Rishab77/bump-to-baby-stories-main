import { describe, expect, it } from "vitest";
import { bookingMessage, packageMessage, STUDIO, whatsappUrl } from "@/lib/studio";
describe("studio booking rules", () => {
  it("uses the specified WhatsApp number", () => { expect(new URL(whatsappUrl()).pathname).toBe("/9779851224030"); });
  it("never enables public pricing", () => { expect(STUDIO.displayPrices).toBe(false); });
  it("encodes the specified default enquiry", () => { expect(new URL(whatsappUrl()).searchParams.get("text")).toBe("Hello, I'd like to book a photography session. Can you share availability and packages?"); });
  it("includes the wedding package name", () => { expect(packageMessage("wedding", "The Wedding Story")).toBe("Hello, I'm interested in wedding photography (The Wedding Story). Please share details."); });
  it("includes the newborn package name", () => { expect(packageMessage("newborn", "Tiny Beginnings")).toBe("Hello, I'm interested in newborn photography (Tiny Beginnings). Please share details."); });
  it("composes booking details into a WhatsApp enquiry", () => { expect(bookingMessage({ name: "Rishab", event: "Wedding", date: "2027-01-20", location: "Kathmandu", message: "Please share availability." })).toBe("Hello, my name is Rishab. I'm looking to book a Wedding on 2027-01-20 in Kathmandu. Please share availability."); });
});