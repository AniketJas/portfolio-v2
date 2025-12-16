import SideNavbar from "./components/SideNavbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const Layout = () => {
  return (
    <main className="overflow-y-scroll no-scrollbar h-screen select-none cursor-default" >
      <SideNavbar />

      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}

export default Layout