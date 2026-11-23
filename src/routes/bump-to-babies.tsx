import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, ServicePage, Gallery, PageHeading, PackageCards, BookingButton, ContactPage } from "@/components/studio-site";
import { images } from "@/lib/photos";
export const Route = createFileRoute("/bump-to-babies")({
  head: () => ({ meta: [{ title: "Maternity & Newborn Photographer Nepal | Bump to babies" }, { name: "description", content: "Gentle maternity, newborn, cake smash, milestone and family photography in Nepal." }, { property: "og:title", content: "Maternity & Newborn Photographer Nepal | Bump to babies" }, { property: "og:description", content: "Gentle maternity, newborn, cake smash, milestone and family photography in Nepal." }] }),
  component: Page,
});
function Page() { return <><SiteHeader /><ServicePage wedding={false} /><SiteFooter /></>; }
