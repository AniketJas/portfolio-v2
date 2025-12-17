import dp from "../assets/profilePhoto.webp"

const About = () => {
  return (
    <section className="px-4 py-12 md:px-16 lg:px-32 lg:h-screen bg-gradient-to-b from-zinc-700 via-zinc-900 to-black text-white grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-3 content-center">
      <h2 className="text-bold text-center col-span-2 font-extrabold text-3xl md:text-4xl lg:text-6xl mb-2 md:mb-6 lg:mb-10">More About Me</h2>

      <div className="md:row-span-4 lg:p-8 lg:ml-2 flex justify-center items-center md:block">
        <img
          src={dp}
          alt="profile-photo"
          className="rounded-2xl shadow-xl "
        />
      </div>

      <div className="md:col-span-2 text-sm lg:text-xl lg:leading-8 text-semibold mb-4">
        <p>I am a <strong>Software Engineer</strong> driven by the challenge of turning complex ideas into user-friendly software. With a degree in <strong>Computer Science from IIT (ISM) Dhanbad</strong>, I have built a career creating reliable applications for professional environments. I thrive in dynamic settings where I can handle the entire development process, from designing the look of a website to building the logic behind it.</p>
      </div>

      <div className="col-span-2 text-sm lg:text-xl lg:leading-8 text-semibold mb-4">
        <p>Over the last few years, I have sharpened my skills in the <strong>MERN stack (MongoDB, Express, React, Node) and Angular</strong>, while also building desktop apps with Electron.js. My work ranges from creating interactive tools, like a <strong>sorting algorithm visualizer</strong>, to engineering secure systems like a <strong>Blood Bank platform using PHP and MySQL</strong>. I enjoy the logic of <strong>backend development</strong> just as much as the creativity needed for a smooth user interface.</p>
      </div>

      <div className="col-span-2 text-sm lg:text-xl lg:leading-8 text-semibold">
        <p>I am a problem solver who loves making things faster and more efficient—like optimizing code to boost user engagement. I constantly learn new tools and stay active to keep up with industry trends. If you are looking for a developer who creates clean, high-performance software, let&#8217;s connect.</p>
      </div>
    </section>
  )
}

export default About