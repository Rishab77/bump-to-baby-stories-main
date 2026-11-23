import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, ServicePage, Gallery, PageHeading, PackageCards, BookingButton, ContactPage } from "@/components/studio-site";
import { images } from "@/lib/photos";
export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [{ title: "Photography Portfolio | Bump to babies" }, { name: "description", content: "Wedding, maternity, newborn and baby photography portfolio from Nepal." }, { property: "og:title", content: "Photography Portfolio | Bump to babies" }, { property: "og:description", content: "Wedding, maternity, newborn and baby photography portfolio from Nepal." }] }),
  component: Page,
});
function Page() { return <><SiteHeader /><main className="container pb-20"><PageHeading eyebrow="Portfolio" title="Moments we treasure." description="A glimpse of the love stories and little beginnings we have been trusted to tell." /><Gallery /></main><SiteFooter /></>; }
