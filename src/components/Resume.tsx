import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Resume = () => {
  return (
    <a href="https://drive.google.com/uc?export=download&id=1GBK-Q6E-ysw1TKR-vZMAcIUjSg-7EaV8">
      <button className="flex cursor-pointer gap-2 justify-center items-center bg-amber-600 text-white px-8 py-4 rounded-2xl shadow-2xs">
        <FontAwesomeIcon icon={faFileArrowDown} className="text-xl" />
        Resume
      </button>
    </a>
  )
}

export default Resume