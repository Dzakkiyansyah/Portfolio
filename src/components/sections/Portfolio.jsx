import { motion as Motion } from 'framer-motion';
import PortfolioCard from '../common/PortfolioCard';

const projects = [
  {
    image: 'https://placehold.co/600x400/111827/3B82F6?text=Project+One',
    title: 'Project Website Modern',
    description: 'Deskripsi singkat mengenai proyek ini, tantangan yang dihadapi, dan solusi yang diimplementasikan.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    image: 'https://placehold.co/600x400/1F2937/3B82F6?text=Project+Two',
    title: 'Aplikasi Analitik Data',
    description: 'Aplikasi yang dirancang untuk memecahkan masalah sehari-hari dengan antarmuka yang bersih dan modern.',
    tags: ['Next.js', 'Firebase', 'Chart.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    image: 'https://placehold.co/600x400/6B7280/3B82F6?text=Project+Three',
    title: 'Platform E-Commerce',
    description: 'Platform visualisasi data yang membantu bisnis mengambil keputusan berdasarkan wawasan yang akurat.',
    tags: ['React Native', 'Node.js', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="portfolio" className="py-24 bg-light-background dark:bg-dark-background">
      <div className="container px-6 mx-auto">
        <Motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl text-light-text dark:text-dark-text">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-subtle dark:text-subtle-dark">
            Beberapa karya pilihan yang menunjukkan keahlian dan hasrat saya.
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