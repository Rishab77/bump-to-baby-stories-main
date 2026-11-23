import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, ServicePage, Gallery, PageHeading, PackageCards, BookingButton, ContactPage } from "@/components/studio-site";
import { images } from "@/lib/photos";
export const Route = createFileRoute("/packages")({
  head: () => ({ meta: [{ title: "Photography Packages | Bump to babies" }, { name: "description", content: "Wedding, maternity, newborn and baby photography packages in Nepal. Enquire on WhatsApp." }, { property: "og:title", content: "Photography Packages | Bump to babies" }, { property: "og:description", content: "Wedding, maternity, newborn and baby photography packages in Nepal. Enquire on WhatsApp." }] }),
  component: Page,
});
function Page() { return <><SiteHeader /><main className="container pb-20"><PageHeading eyebrow="Packages" title="Made for your chapter." description="Every story is different. Message us on WhatsApp for details tailored to you." /><PackageCards /><div className="package-card mt-6"><h3>Custom quote</h3><p className="body-copy mb-6">Something different in mind? Tell us and we will create it together.</p><BookingButton message="Hello, I would like a custom photography quote. Please share details.">Get a Quote</BookingButton></div></main><SiteFooter /></>; }
