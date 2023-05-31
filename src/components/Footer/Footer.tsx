import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24 text-center text-sm text-gray-500">
      <div className="container flex flex-row justify-between">
        <div>
          Built with <span className="text-purple-500">♡</span> by{' '}
          <Link target="_blank" href="https://github.com/babicastilho">
            Bárbara Castilho
          </Link>
        </div>
        <div>2022 - {new Date().getFullYear()} &copy; All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
