import { useEffect } from "react";

export const useScrollSpy = ({
  sections,
  setActiveSection,
  threshold = 0.6,
  onSectionEnter, // NEW (optional)
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection?.(entry.target.id);
            onSectionEnter?.(entry.target.id);
          }
        });
      },
      { threshold }
    );

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections, setActiveSection, threshold, onSectionEnter]);
};
