import { motion as Motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PortfolioCard = ({ project }) => {
  const { image, title, description, tags, liveUrl, repoUrl } = project;

  return (
    <Motion.div
      className="flex flex-col overflow-hidden transition-shadow duration-300 shadow-md bg-light-card dark:bg-dark-card rounded-xl hover:shadow-2xl dark:hover:shadow-primary/20"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="overflow-hidden">
        <Motion.img
          src={image}
          alt={title}
          className="object-cover w-full h-52"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-light-text dark:text-dark-text">{title}</h3>
        <p className="flex-grow mb-4 text-sm text-subtle dark:text-subtle-dark">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center mt-auto space-x-6">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-semibold transition-colors text-subtle dark:text-subtle-dark hover:text-primary"
          >
            <FiExternalLink className="mr-2" />
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-semibold transition-colors text-subtle dark:text-subtle-dark hover:text-primary"
          >
            <FiGithub className="mr-2" />
            Source Code
          </a>
        </div>
      </div>
    </Motion.div>
  );
};

export default PortfolioCard;