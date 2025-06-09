import { motion as Motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, url: 'https://github.com/Dzakkiyansyah' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/dzakkiyansyah' },
  { icon: <FaInstagram />, url: 'https://instagram.com/dzakkiyansyahh' },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-transparent">
      <div className="container px-6 mx-auto text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold md:text-5xl text-light-text dark:text-dark-text drop-shadow-sm">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto mt-4 mb-10 text-lg text-subtle dark:text-subtle-dark drop-shadow-sm">
            I am always open to discussing new projects, creative ideas, or opportunities to be a part of your vision.
          </p>
          <Motion.a
            href="mailto:dzakkiyansyah@gmail.com"
            className="inline-block px-10 py-4 font-bold text-white rounded-lg bg-primary"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 10px 30px -10px #3B82F6',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </Motion.a>
          <div className="flex justify-center mt-12 space-x-6">
            {socials.map((social, index) => (
              <Motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl transition-colors text-subtle dark:text-subtle-dark hover:text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {social.icon}
              </Motion.a>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
