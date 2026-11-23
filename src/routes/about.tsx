import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, ServicePage, Gallery, PageHeading, PackageCards, BookingButton, ContactPage } from "@/components/studio-site";
import { images } from "@/lib/photos";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Our Studio | Bump to babies" }, { name: "description", content: "Meet the heartfelt wedding, maternity and newborn photography studio behind Bump to babies in Nepal." }, { property: "og:title", content: "About Our Studio | Bump to babies" }, { property: "og:description", content: "Meet the heartfelt wedding, maternity and newborn photography studio behind Bump to babies in Nepal." }] }),
  component: Page,
});
function Page() { return <><SiteHeader /><main className="container section"><div className="about-layout"><img src={images.portrait} alt="Nepali wedding couple portrait" loading="lazy" /><div><span className="eyebrow text-primary">Our story</span><h2>Two chapters, one heartfelt story.</h2><p className="body-copy">We began by photographing weddings across Nepal, then families started returning with new beginnings to share.</p><p className="body-copy">Our team works quietly, warmly and patiently, so you can stay present while we preserve the feeling.</p><p className="body-copy">Our philosophy is simple: real emotion, gentle guidance and photographs you will treasure for generations.</p></div></div></main><SiteFooter /></>; }
