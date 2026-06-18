import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/sections/Hero";
import ScrollShowcase from "@/components/sections/ScrollShowcase";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Footer from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Derek Yuan — Developer Portfolio" },
      {
        name: "description",
        content:
          "Derek Yuan — developer, chess engineer, and AI builder. Certifications, projects, and code.",
      },
      { property: "og:title", content: "Derek Yuan — Developer Portfolio" },
      { property: "og:description", content: "Developer, chess engineer, and AI builder." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ScrollShowcase />
      <About />
      <Certifications />
      <Projects />
      <Blog />
      <Footer />
    </main>
  );
}
