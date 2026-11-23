import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, ServicePage, Gallery, PageHeading, PackageCards, BookingButton, ContactPage } from "@/components/studio-site";
import { images } from "@/lib/photos";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Book a Photography Session | Bump to babies" }, { name: "description", content: "Book wedding, maternity, newborn or baby photography in Kathmandu, Nepal through WhatsApp." }, { property: "og:title", content: "Book a Photography Session | Bump to babies" }, { property: "og:description", content: "Book wedding, maternity, newborn or baby photography in Kathmandu, Nepal through WhatsApp." }] }),
  component: Page,
});
function Page() { return <><SiteHeader /><ContactPage /><SiteFooter /></>; }
