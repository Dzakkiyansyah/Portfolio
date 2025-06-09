import { motion as Motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
];

const Skills = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section id="skills" className="relative py-24 bg-transparent">
      <div className="container px-6 mx-auto">
        <Motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl text-light-text dark:text-dark-text drop-shadow-sm">
            Skills & Tools
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-subtle dark:text-subtle-dark drop-shadow-sm">
            The technologies and tools I use to design and build applications.
          </p>
        </Motion.div>
        <Motion.div
          className="grid max-w-4xl grid-cols-3 gap-8 mx-auto sm:grid-cols-4 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <Motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 text-center transition-transform duration-300 rounded-lg group"
              variants={itemVariants}
            >
              <div className="text-5xl transition-all duration-300 text-subtle dark:text-subtle-dark group-hover:text-primary group-hover:scale-110 drop-shadow-sm">
                {skill.icon}
              </div>
              <p className="mt-4 font-semibold text-light-text dark:text-dark-text drop-shadow-sm">
                {skill.name}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;