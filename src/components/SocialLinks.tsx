import Link from 'next/link';

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => (
  <>
    <Link href="#">
      <FaLinkedin className="h-6 w-6 mx-2" />
    </Link>

    <Link href="#">
      <FaGithub className="h-6 w-6 mx-2" />
    </Link>

    <Link href="#">
      <FaTwitter className="h-6 w-6 mx-2" />
    </Link>
  </>
);

export default SocialLinks;
