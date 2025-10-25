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
  const currentSectionRef = useRef(0);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [<Hero key="hero" />, <AboutMe key="about" />, <Skills key="skills" />, <Experience key="exp" />, <Education key="education" />, <Certificates key="certificate" />, <Projects key="projects" />, <ContactMe key="Contact Me" />
  ];

  // Keep ref synced with state
  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isThrottled = false;
    let accumulatedDelta = 0;
    const THRESHOLD = 50; // pixels needed to move a section
    let touchStartY: number | null = null;

    const scrollToSection = (next: number) => {
      setCurrentSection(next);
      isThrottled = true;
      setTimeout(() => (isThrottled = false), 800); // throttle duration
    };

    // Wheel / Trackpad
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isThrottled) return;

      accumulatedDelta += e.deltaY;
      const current = currentSectionRef.current;

      if (accumulatedDelta >= THRESHOLD && current < sections.length - 1) {
        scrollToSection(current + 1);
        accumulatedDelta = 0;
      } else if (accumulatedDelta <= -THRESHOLD && current > 0) {
        scrollToSection(current - 1);
        accumulatedDelta = 0;
      }
    };

    // Arrow keys
    const handleKey = (e: KeyboardEvent) => {
      if (isThrottled) return;

      const current = currentSectionRef.current;
      if (e.key === "ArrowDown" && current < sections.length - 1) scrollToSection(current + 1);
      else if (e.key === "ArrowUp" && current > 0) scrollToSection(current - 1);
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isThrottled || touchStartY === null) return;

      const currentY = e.touches[0].clientY;
      const diff = touchStartY - currentY;
      const current = currentSectionRef.current;

      if (Math.abs(diff) < 30) return; // minimal swipe threshold
      if (diff > 0 && current < sections.length - 1) scrollToSection(current + 1);
      else if (diff < 0 && current > 0) scrollToSection(current - 1);

      touchStartY = null; // reset after swipe
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [sections.length]);

  // Smooth scroll to the current section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({
      top: currentSection * window.innerHeight,
      behavior: "smooth",
    });
  }, [currentSection]);

  return (
    <div ref={containerRef} className="h-screen w-screen overflow-hidden relative">
      {/* Side navbar */}
      {/* <SideNavbar currentSection={currentSection} /> */}
      <SideNavbar
        currentSection={currentSection}
        scrollToSection={(index) => {
          const container = containerRef.current;
          if (!container) return;
          container.scrollTo({
            top: index * window.innerHeight,
            behavior: "smooth",
          });
          setCurrentSection(index);
        }}
      />

      {/* Sections */}
      {sections.map((Section, index) => (
        <div key={index} className="h-screen w-full">
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
