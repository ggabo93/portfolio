import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { Projects } from "@/components/sections/Projects";
import { AIConversations } from "@/components/sections/AIConversations";
import { Dashboard } from "@/components/sections/Dashboard";
import { Timeline } from "@/components/sections/Timeline";
import { Learnings } from "@/components/sections/Learnings";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CurrentlyBuilding />
        <Projects />
        <AIConversations />
        <Dashboard />
        <Timeline />
        <Learnings />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
