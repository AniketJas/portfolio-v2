import SocialMedia from "../components/SocialMedia"
import bg from "../assets/bg2.jpg"

const Hero = () => {
  return (
    <section
      className="relative w-full h-1/2 md:h-screen overflow-hidden flex items-center justify-center md:justify-start"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-36 py-8 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg mb-2 opacity-0 translate-y-4 animate-fade-in">
          Hi, I'm Aniket Jas
        </h1>
        <p className="text-sm sm:text-base md:text-xl font-semibold text-gray-100 mb-3 opacity-0 translate-y-4 animate-fade-in delay-150">
          Software Engineer | Full-stack Developer
        </p>
        <p className="text-sm sm:text-base md:text-2xl text-gray-200 mb-6 opacity-0 translate-y-4 animate-fade-in delay-300">
          I make imaginations come to life through code
        </p>

        <div className="opacity-0 translate-y-4 animate-fade-in delay-450 inline-block">
          <SocialMedia size={8} hover={11} />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeInUp 600ms ease-out forwards; }
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-450 { animation-delay: 450ms; }
      `}</style>
    </section>
  )
}

export default Hero