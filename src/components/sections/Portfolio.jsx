import { motion as Motion } from 'framer-motion';
import PortfolioCard from '../common/PortfolioCard';

import cultivoImg from '../../assets/images/cultivo.png';
import portfolioImg from '../../assets/images/Portfolio.png';
import siresitaImg from '../../assets/images/siresita.png';

const projects = [
  {
    image: cultivoImg,
    title: 'Cultivo',
    description:
      'Agrotourism ticket booking platform that offers convenience for consumers to explore, book, and enjoy various tourism products.',
    tags: ['React+Vite', 'Tailwind CSS', 'Node', 'Express'],
    liveUrl: 'https://cultivo.infinitelearningproject.com/',
    repoUrl: 'https://github.com/kuncoro-0927/frontend-cultivo-project',
  },
  {
    image: siresitaImg,
    title: 'Siresita',
    description:
      'North Sumatra tourism application uses AI implementation to provide recommendations for tourist attractions based on user preferences. Currently still in development.',
    tags: ['React+Vite', 'Tailwind CSS', 'Express', 'Tensorflow'],
    liveUrl: 'noopener noreferrer',
    repoUrl: 'noopener noreferrer',
  },
  {
    image: portfolioImg,
    title: 'Portofolio',
    description:
      'A personal portfolio powered by React and Tailwind CSS, designed to present my work in a fast and modern interface.',
    tags: ['React+Vite', 'tailwind css'],
    liveUrl: 'noopener noreferrer',
    repoUrl: 'https://github.com/Dzakkiyansyah/Portfolio',
  },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="portfolio" className="relative py-24 bg-transparent">
      <div className="container px-6 mx-auto">
        <Motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl text-light-text dark:text-dark-text drop-shadow-sm">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-subtle dark:text-subtle-dark drop-shadow-sm">
            Some selected works that show my skills.
          </p>
        </Motion.div>
        <Motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <Motion.div key={index} variants={itemVariants}>
              <PortfolioCard project={project} />
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
