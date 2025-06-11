import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Nexus - Empowering Autonomous AI Agents for Intelligent Automation",
  description: "AI Nexus is a cutting-edge platform designed to deploy and manage autonomous AI agents, optimizing workflows, automating decision-making, and driving operational efficiency across industries.",
  keywords: ["Next.js", "AI", "Autonomous Agents", "AI Nexus"],
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      {/* Other components */}
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <HomeBlogSection posts={posts} />
      <Contact />
      <Clients />
    </main>
  );
}
