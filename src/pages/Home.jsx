import bg from '../assets/bg2.webp'
import Links from '../components/Links'

const Home = () => {
  return (
    <div className='relative w-full lg:h-screen overflow-hidden flex items-center justify-center md:justify-start'>
      <picture className='absolute inset-0 -z-10'>
        <source srcSet={bg} type="image/webp" />
        <img src={bg} alt="Background" className='w-full h-full object-cover' />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 md:to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-20 lg:px-32 pt-20 md:pt-32 pb-16 md:pb-28 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold text-white drop-shadow-lg opacity-0 mb-3 md:mb-4 translate-y-4 animate-fade-in">
          Hi, I'm Aniket Jas
        </h1>
        <p className="text-sm sm:text-base lg:text-2xl font-semibold text-gray-100 mb-2 md:mb-4 opacity-0 translate-y-4 animate-fade-in delay-150">
          Software Engineer | Full-stack Developer
        </p>
        <p className="text-sm sm:text-base lg:text-2xl text-gray-200 mb-4 translate-y-4 opacity-0 animate-fade-in delay-300">
          I make imaginations come to life through code
        </p>

        <div className="opacity-0 translate-y-4 animate-fade-in delay-450 inline-block text-white">
          <Links />
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
    </div>
  )
}

export default Home