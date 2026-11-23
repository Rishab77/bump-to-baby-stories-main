import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Hero, HomeIntro, ServiceCards, Gallery, Testimonials, InstagramSection } from "@/components/studio-site";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Bump to babies | Wedding & Newborn Photographer Nepal" }, { name: "description", content: "Wedding photographer in Kathmandu Nepal and newborn photographer Nepal. From your first dance to your first cry, we capture it all." }, { property: "og:title", content: "Bump to babies | Wedding & Newborn Photography Nepal" }, { property: "og:description", content: "From your first dance to your first cry, we capture it all." }] }),
  component: Index,
});
function Index() { return <><SiteHeader /><main><Hero /><HomeIntro /><ServiceCards /><section className="container section"><div className="section-top"><div><span className="eyebrow text-primary">Featured gallery</span><h2 className="section-heading">Stories we love.</h2></div></div><Gallery featured /></section><Testimonials /><InstagramSection /></main><SiteFooter /></>; }
