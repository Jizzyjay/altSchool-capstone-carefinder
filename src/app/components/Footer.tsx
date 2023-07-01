import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsGlobeAsiaAustralia } from "react-icons/bs"
import Image from "next/image";
import logo from "../../../public/logo.png";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer  items-center p-10 mt-10 bg-[#08299B] text-neutral-content">
      <div className="items-center grid-flow-col gap-3">
        <Link href="/" className="flex justify-center items-center">
          <Image src={logo} alt="logo" width={35} height={35} />
        </Link>
      </div>
      <p>Copyright © {year} - All right reserved</p>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link target="_blank" href="https://www.linkedin.com/in/ekunolajohn/">
          <AiOutlineLinkedin className="w-6 h-6 hover:text-slate-400" />
        </Link>
        <Link target="_blank" href="https://github.com/Jizzyjay">
          <AiOutlineGithub className="w-6 h-6 hover:text-slate-400" />
        </Link>
        <Link target="_blank" href="https://twitter.com/Oluwatosin_EJ">
          <AiOutlineTwitter className="w-6 h-6 hover:text-blue-400" />
        </Link>
        <Link target="_blank" href="https://johnekunola.com/">
          <BsGlobeAsiaAustralia  className="w-5 h-5 hover:text-blue-400" />
        </Link>
        
      </div>
    </footer>
  );
}

export default Footer;
