import Link from "next/link";
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";

function Footer() {


  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="footer  items-center p-10 mt-10 bg-[#08299B] text-neutral-content">
      <div className="items-center grid-flow-col gap-3">
      <Link href="/" className="flex justify-center items-center">
              <h2 className="font-signature pl-2 text-xl text-bold font-extrabold	">Care Finder</h2>
            </Link>
      </div>
      <p>Copyright © {year} - All right reserved</p>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link target="_blank" href="https://www.linkedin.com/in/ekunolajohn/">
          <AiOutlineLinkedin className="w-7 h-7 hover:text-slate-400" />
        </Link>
        <Link target="_blank" href="https://github.com/Jizzyjay">
          <AiOutlineGithub className="w-7 h-7 hover:text-slate-400" />
        </Link>
        <Link target="_blank" href="https://twitter.com/Oluwatosin_EJ">
          <AiOutlineTwitter className="w-7 h-7 hover:text-blue-400" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
