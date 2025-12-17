import { useScrollSpy } from "../hooks/useScrollSpy.js";
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

  useScrollSpy({
    sections: sections.map((s) => s.section),
    setActiveSection,
    threshold: 0.6,
  });

  return (
    <nav className="hidden lg:flex flex-col items-center justify-center ml-6 h-screen fixed left-0 top-0 z-50">
      <div className="py-6 px-4 bg-white rounded-xl flex flex-col items-center justify-center gap-4 shadow-xl">
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
    </nav>
  )
}

export default SideNavbar