import {
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Trophy,
  Mail,
  FolderCode,
  Linkedin,
  Github,
} from "lucide-react";

const Links = () => {

  const sections = [
    { id: 1, icon: Linkedin, name: "https://www.linkedin.com/in/aniket-jas/" },
    { id: 2, icon: Github, name: "https://github.com/AniketJas" },
  ];

  return (
    <section className="flex items-center justify-center gap-4 md:gap-6">
      {sections.map(({ id, icon: Icon, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
          <button key={id} className="py-2 pr-2 pl-0 rounded-lg transition-all duration-200 hover:pl-2 hover:bg-black hover:text-white hover:scale-110">
            <Icon className="md:w-10 md:h-10" />
          </button>
        </a>
      ))}
    </section>
  )
}

export default Links