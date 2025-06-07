const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 bg-light-background dark:bg-dark-background dark:border-gray-800">
      <div className="container px-6 mx-auto text-center text-subtle dark:text-subtle-dark">
        <p>&copy; {currentYear} Dzakkiyansyah</p>
      </div>
    </footer>
  );
};

export default Footer;