import { FileDown } from "lucide-react"

const Resume = () => {
  return (
    <a href="https://drive.google.com/uc?export=download&id=1GBK-Q6E-ysw1TKR-vZMAcIUjSg-7EaV8">
      <button className="flex cursor-pointer gap-2 justify-center items-center bg-amber-600 text-white px-8 py-4 rounded-2xl shadow-2xs">
        <FileDown className="w-5 h-5" />
        Resume
      </button>
    </a>
  )
}

export default Resume