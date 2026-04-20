import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { socials } from '@/utils';
import { MdOutlineWeb } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="relative flex justify-between p-5  w-full border-t border-bg_secondary">
      <div className="relative flex text-white">
        <p>All Rights Reserved Copyright</p>
      </div>
      <div className="relative flex text-white">
        <p>
          Marcela Samili - Aluna do curso de Ciências da Computação Unip 2026
        </p>

        <p className=""></p>
      </div>
      <div className="relative flex flex-wrap gap-4  text-white text-xl">
        <a href={socials.portifol} target="_blank">
          <MdOutlineWeb />
        </a>
        <a href={socials.github} target="_blank">
          <FaGithub />
        </a>
        <a href={socials.linkedin} target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
