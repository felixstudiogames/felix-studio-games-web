import { Link } from "react-router-dom";
import logo from "./../assets/logo-02.svg";

function Logo({ className }) {
  return (
    <Link to={'/'}>
      <img
        src={logo}
        alt="Felix Studio Games"
        className={`block h-11 w-auto ${className || ""}`}
      />
    </Link>
  );
}

const linkClass = 'px-4 sm:px-8 text-[15px] sm:text-[18px] text-[#41445D] hover:text-[#ff5a1f] hover:underline transition-colors'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-6 lg:gap-8 pt-10 border-t border-[#e4ddc9] mt-16 lg:mt-[120px]">
      <Logo className="!h-[52px]" />

      <nav aria-label="Footer">
        <ul className="flex items-center list-none p-0 m-0">
          <li>
            <Link to="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>
          </li>
          <li className="border-l border-[#e4ddc9]">
            <Link to="/" state={{ scrollTo: 'contact' }} className={linkClass}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default Footer