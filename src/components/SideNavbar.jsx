import {
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Trophy,
  Mail,
  FolderCode,
} from "lucide-react";
import { useEffect, useState } from "react";

const SideNavbar = () => {

  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: 1, icon: Home, name: "Home", section: "home" },
    { id: 2, icon: User, name: "About Me", section: "about" },
    { id: 3, icon: Code, name: "Skills", section: "skills" },
    { id: 4, icon: Briefcase, name: "Work Experience", section: "experience" },
    { id: 5, icon: GraduationCap, name: "Education", section: "education" },
    { id: 6, icon: Trophy, name: "Certificates", section: "certificates" },
    { id: 7, icon: FolderCode, name: "Projects", section: "projects" },
    { id: 8, icon: Mail, name: "Contact Me", section: "contact" },
  ];

  const handleClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hidden md:flex flex-col items-center justify-center ml-6 h-screen fixed left-0 top-0">
      <div className="py-6 px-4 bg-white rounded-xl flex flex-col items-center justify-center gap-4 shadow-lg">
        {sections.map(({ id, icon: Icon, section }) => (
          <button key={id} className={`p-3 rounded-lg transition-all duration-200
            ${activeSection === section
              ? "bg-zinc-500 text-white"
              : "text-slate-600 hover:bg-black hover:text-white hover:scale-110"
            }`
          } onClick={() => handleClick(section)}>
            <Icon />
          </button>
        ))}
      </div>
    </section>
  )
}

export default SideNavbar