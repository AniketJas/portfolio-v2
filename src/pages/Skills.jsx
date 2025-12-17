import BoxWithTitle from '../components/BoxWithTitle';
import TechLogoBox from '../components/TechLogoBox';

import frontendLogos from '../assets/frontendLogos';
import backendLogos from '../assets/backendLogos';
import programmingLanguageLogos from '../assets/programmingLanguageLogos';
import versionControlLogos from '../assets/versionControlLogos';
import toolsLogos from '../assets/toolsLogos';

import { useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Skills = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useScrollSpy({
    sections: ["skills"],
    threshold: 0.4,
    onSectionEnter: (id) => {
      if (id === "skills") setSkillsVisible(true);
    },
  });

  return (
    <section
      id="skills"
      className="px-4 pt-12 pb-12 md:px-16 lg:px-32 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
    >
      <h2 className="text-center md:col-span-2 font-extrabold text-3xl lg:text-6xl mb-4 flex justify-center items-center">
        Skills I Have
      </h2>

      <BoxWithTitle title="Frontend">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {frontendLogos.map(({ image, name, bold }) => (
            <TechLogoBox key={name} image={image} name={name} visible={skillsVisible} bold={bold} />
          ))}
        </div>
      </BoxWithTitle>

      <BoxWithTitle title="Backend">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {backendLogos.map(({ image, name, bold }) => (
            <TechLogoBox key={name} image={image} name={name} visible={skillsVisible} bold={bold} />
          ))}
        </div>
      </BoxWithTitle>

      <BoxWithTitle title="Version Control">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {versionControlLogos.map(({ image, name, bold }) => (
            <TechLogoBox key={name} image={image} name={name} visible={skillsVisible} bold={bold} />
          ))}
        </div>
      </BoxWithTitle>

      <BoxWithTitle title="Tools & Language">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {toolsLogos.map(({ image, name, bold }) => (
            <TechLogoBox key={name} image={image} name={name} visible={skillsVisible} bold={bold} />
          ))}
          {programmingLanguageLogos.map(({ image, name, bold }) => (
            <TechLogoBox key={name} image={image} name={name} visible={skillsVisible} bold={bold} />
          ))}
        </div>
      </BoxWithTitle>
    </section>
  );
};

export default Skills;
