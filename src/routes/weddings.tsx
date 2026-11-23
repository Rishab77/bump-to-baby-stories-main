import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, ServicePage, Gallery, PageHeading, PackageCards, BookingButton, ContactPage } from "@/components/studio-site";
import { images } from "@/lib/photos";
export const Route = createFileRoute("/weddings")({
  head: () => ({ meta: [{ title: "Wedding Photographer in Kathmandu Nepal | Bump to babies" }, { name: "description", content: "Wedding, pre-wedding, engagement photography and cinematic films in Nepal. Book on WhatsApp." }, { property: "og:title", content: "Wedding Photographer in Kathmandu Nepal | Bump to babies" }, { property: "og:description", content: "Wedding, pre-wedding, engagement photography and cinematic films in Nepal. Book on WhatsApp." }] }),
  component: Page,
});
function Page() { return <><SiteHeader /><ServicePage wedding /><SiteFooter /></>; }
