import { useState, useEffect } from "react"
import { Linkedin, Github, FileText } from "lucide-react"

interface SocialMediaProps {
  size: number
  hover: number
}

const iconConfig = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/aniket-jas/" },
  { name: "GitHub", icon: Github, url: "https://github.com/AniketJas" },
  { name: "Resume", icon: FileText, url: "https://drive.google.com/file/d/1GBK-Q6E-ysw1TKR-vZMAcIUjSg-7EaV8/view" },
]

const SocialMedia = ({ size, hover }: SocialMediaProps) => {
  const [hovered, setHovered] = useState<string | null>(null)
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = (e: MediaQueryListEvent | { matches: boolean }) => setCanHover(Boolean(e.matches))
    // set initial
    setCanHover(Boolean(mql.matches))
    // listen for changes
    if (mql.addEventListener) mql.addEventListener('change', update)
    else mql.addListener(update)
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', update)
      else mql.removeListener(update)
    }
  }, [])

  const isHovered = (name: string) => canHover && hovered === name

  return (
    <div className="flex gap-2 items-center justify-center md:justify-start">
      {iconConfig.map(({ name, icon: Icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 pl-0 pr-2 py-2 rounded-lg transition-all duration-300 ${isHovered(name) ? "bg-black/60 backdrop-blur-sm pl-2 pr-4" : "bg-transparent"
            }`}
          onMouseEnter={() => canHover && setHovered(name)}
          onMouseLeave={() => canHover && setHovered(null)}
        >
          <Icon
            style={{
              width: `${(isHovered(name) ? hover : size) * 4}px`,
              height: `${(isHovered(name) ? hover : size) * 4}px`,
              color: isHovered(name) ? "#FFFFFF" : "#000000",
            }}
            className="stroke-1 transition-all duration-300 shrink-0"
          />
          <span className={`font-semibold whitespace-nowrap transition-all duration-300 ${isHovered(name) ? "text-white opacity-100" : "text-transparent opacity-0 w-0"
            }`}>
            {name}
          </span>
        </a>
      ))}
    </div>
  )
}

export default SocialMedia