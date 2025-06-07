import { motion as Motion } from 'framer-motion';
import PortfolioCard from '../common/PortfolioCard';

import cultivoImg from '../../assets/images/cultivo.png';
import siresitaImg from '../../assets/images/siresita.png';

const projects = [
  {
    image: cultivoImg, 
    title: 'Cultivo',
    description:
      'platform pemesanan tiket Agrowisata yang menawarkan kemudahan bagi konsumen untuk menjelajahi, memesan, dan menikmati berbagai produk wisata.',
    tags: ['React+Vite', 'Tailwind CSS', 'Node', 'Express'],
    liveUrl: 'https://cultivo.infinitelearningproject.com/',
    repoUrl: '',
  },
  {
    image: siresitaImg,
    title: 'Siresita',
    description:
      'Aplikasi wisata Sumatera Utara menggunakan implimentasi AI untuk memberikan rekomendasi tempat wisata berdasarkan preferensi pengguna.',
    tags: ['React+Vite', 'Tailwind CSS', 'Express', 'Tensorflow'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    image: 'https://placehold.co/600x400/6B7280/3B82F6?text=Project+Three',
    title: 'Develop',
    description: 'Sedang dalam masa pengembangan.',
    tags: ['React+Vite', 'Node.js', 'Express'],
    liveUrl: '#',
    repoUrl: '#',
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