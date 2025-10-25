import DownloadResume from "../components/Resume"

const Hero = () => {
  return (
    <>
      <div className="flex">
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="text-center text-2xl font-extrabold">Hero</div>
          <DownloadResume />
        </div>
      </div>
    </>
  )
}

export default Hero