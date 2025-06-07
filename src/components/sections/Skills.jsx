import { motion as Motion } from 'framer-motion';
// Impor ikon-ikon yang relevan
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { SiExpress, SiJavascript, SiTailwindcss } from 'react-icons/si';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 bg-light-card dark:bg-dark-card">
      <div className="container px-6 mx-auto">
        <Motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl text-light-text dark:text-dark-text">
            Skills & Tools
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-subtle dark:text-subtle-dark">
            Teknologi dan alat yang saya gunakan untuk merancang dan membangun
            aplikasi.
          </p>
        </Motion.div>

        <Motion.div
          className="grid max-w-4xl grid-cols-3 gap-8 mx-auto sm:grid-cols-4 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <Motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 text-center rounded-lg group"
              variants={itemVariants}
              // --- PENAMBAHAN ANIMASI MELAYANG DI SINI ---
              animate={{
                y: [0, -10, 0], // Bergerak naik (-10px) lalu kembali ke posisi awal (0)
              }}
              transition={{
                duration: 2.5, // Durasi satu siklus animasi
                repeat: Infinity, // Mengulang animasi selamanya
                repeatType: 'loop',
                ease: 'easeInOut',
                delay: index * 0.2, // Memberi jeda awal yang berbeda untuk setiap ikon
              }}
            >
              <div className="text-5xl transition-all duration-300 text-subtle dark:text-subtle-dark group-hover:text-primary group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="mt-4 font-semibold text-light-text dark:text-dark-text">
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
