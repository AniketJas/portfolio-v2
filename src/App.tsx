import { useEffect, useRef, useState } from "react";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import SideNavbar from "./components/SideNavbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import ContactMe from "./pages/ContactMe";
import Resume from "./components/Resume";

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Refs for each section element
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    <Hero key="hero" />,
    <AboutMe key="about" />,
    <Skills key="skills" />,
    <Experience key="exp" />,
    <Education key="education" />,
    <Certificates key="certificate" />,
    <Projects key="projects" />,
    <ContactMe key="Contact Me" />,
  ];

  // Effect to observe which section is currently in view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const options = {
      root: container, // Use the scrolling container as the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the intersecting element
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    }, options);

    // Store current refs in a variable for cleanup
    const currentSectionRefs = sectionRefs.current;

    // Observe each section
    currentSectionRefs.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup
    return () => {
      currentSectionRefs.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sections.length]); // Re-run if sections array changes

  return (
    // Container is now scrollable
    <div ref={containerRef} className="h-screen w-screen overflow-y-auto relative no-scrollbar">
      {/* Side navbar */}
      <SideNavbar
        currentSection={currentSection}
        scrollToSection={(index) => {
          // Scroll to the corresponding ref element
          sectionRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      />

      {/* Sections */}
      {sections.map((Section, index) => (
        // Each section is given a ref
        <div key={index} ref={(el) => { sectionRefs.current[index] = el; }}>
          {Section}
          <div
            className={`fixed bottom-6 right-6 transition-all duration-700 ease-in-out z-50
    ${currentSection > 0 ? "opacity-100 translate-y-0 cursor-pointer" : "opacity-0 translate-y-10 pointer-events-none"}`}
          >
            <Resume />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;