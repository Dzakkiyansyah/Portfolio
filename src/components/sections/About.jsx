import { motion as Motion } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiCode, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: <FiBriefcase className="w-8 h-8" />,
    title: '1+ Years',
    subtitle: 'Experience',
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: '10+ Projects',
    subtitle: 'Completed',
  },
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Frontend',
    subtitle: 'Focus',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-transparent">
      <div className="container grid items-center gap-10 px-6 mx-auto md:grid-cols-2 md:gap-20">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-4 font-semibold text-primary drop-shadow-sm">
            A Glimpse About Me
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl text-light-text dark:text-dark-text drop-shadow-sm">
            Passion-Driven Developer Crafting Modern Web Solutions.
          </h2>
          <p className="mt-6 text-base md:text-lg text-subtle dark:text-subtle-dark drop-shadow-sm">
            My focus is on developing high-performing, responsive, and
            user-friendly web applications that transform ideas into functional
            digital solutions.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center text-lg font-bold transition-colors text-primary group drop-shadow-sm"
            >
              Discover My Full Story
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
          {highlights.map((item, index) => (
            <Motion.div
              key={item.title}
              className="flex items-center p-6 space-x-6 transition-all duration-300 shadow-sm bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-md rounded-xl hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-4 text-white rounded-lg bg-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  {item.title}
                </h3>
                <p className="text-subtle dark:text-subtle-dark">
                  {item.subtitle}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
