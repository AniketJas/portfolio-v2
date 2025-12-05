import {
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Trophy,
  FolderGit2,
  Mail,
} from "lucide-react";

interface SideNavbarProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
}

const sections = [
  { icon: Home, name: "Home" },
  { icon: User, name: "About Me" },
  { icon: Code, name: "Skills" },
  { icon: Briefcase, name: "Work Experience" },
  { icon: GraduationCap, name: "Education" },
  { icon: Trophy, name: "Certificates" },
  { icon: FolderGit2, name: "Projects" },
  { icon: Mail, name: "Contact Me" },
];

const SideNavbar = ({ currentSection, scrollToSection }: SideNavbarProps) => {
  return (
    <div className="hidden sm:flex fixed top-1/2 left-6 -translate-y-1/2 flex-col items-center gap-2 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-2 z-50">
      {sections.map(({ icon: Icon, name }, index) => (
        <div key={index} className="group relative">
          <Icon
            onClick={() => scrollToSection(index)}
            className={`w-5 h-5 p-4 box-content rounded-lg cursor-pointer transition-all duration-300 ${currentSection === index
              ? "bg-black text-white"
              : "text-gray-500 hover:text-black hover:w-7 hover:h-7"
              }`}
          />
          <div className="absolute left-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/70 px-2 py-1 rounded-md text-sm font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideNavbar;