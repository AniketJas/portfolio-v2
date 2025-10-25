import {
  faHouse,
  faUser,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCode,
  faBriefcase,
  faGraduationCap,
  faDiagramProject,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconBaseStyles =
  "cursor-pointer transition-all duration-300 ease-in-out p-4";

interface SideNavbarProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const sections = [
  { icon: faHouse, name: "Home" },
  { icon: faUser, name: "About Me" },
  { icon: faCode, name: "Skills" },
  { icon: faBriefcase, name: "Work Experience" },
  { icon: faGraduationCap, name: "Education" },
  { icon: faTrophy, name: "Certificates" },
  { icon: faDiagramProject, name: "Projects" },
  { icon: faEnvelope, name: "Contact Me" },
];

const SideNavbar = ({ currentSection, scrollToSection }: SideNavbarProps) => {
  return (
    <div
      className={`fixed top-1/2 left-6 -translate-y-1/2 flex flex-col items-center text-lg shadow-2xl bg-white/70 backdrop-blur-md rounded-2xl transition-all duration-700 ease-in-out z-50 py-2 px-2
      ${currentSection > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}
    >
      {sections.map((section, index) => (
        <div key={index} className="relative group">
          {/* Icon */}
          <FontAwesomeIcon
            icon={section.icon}
            className={`${iconBaseStyles} ${currentSection === index
              ? "text-white text-xl bg-black border rounded-xl" // active section
              : "text-gray-500 hover:text-black hover:text-2xl" // inactive
              }`}
            onClick={() => scrollToSection(index)}
          />
          {/* Tooltip / Section name */}
          <div className="absolute left-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/70 font-bold text-sm ease-in-out text-black px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {section.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavbar;
