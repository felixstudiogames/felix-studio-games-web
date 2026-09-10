import { useState } from 'react'
import logo from './../assets/logo-02.svg'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ onGamesClick, onPrivacyClick, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isPrivacyPolicyPage = location.pathname === '/privacy-policy'

  const handleClick = (fn) => {
    fn()
    setMenuOpen(false)
  }

  return (
    <>
      <div className='fixed top-0 left-0 w-full z-50 bg-[#faf6ec] lg:static'>
        <div className='flex items-center justify-between mx-5 my-4 lg:mx-[140px] lg:my-[0px]'>
          <div className='lg:my-[21px]'>
            <Link to={'/'}>
              <img src={logo} alt="logo1" className='w-[90px] lg:w-[100px]' />
            </Link>
          </div>

          {/* Desktop menu */}
          {!isPrivacyPolicyPage && (
            <ul className='hidden lg:flex absolute left-1/2 -translate-x-1/2 list-none gap-[60px] p-0 m-0 text-[20px] pointer'>
              <li><Link to={'/'}>Home</Link></li>
              <li className='cursor-pointer' onClick={() => handleClick(onGamesClick)}>Games</li>
              <li className='cursor-pointer' onClick={() => handleClick(onPrivacyClick)}>Privacy Policy</li>
              <li className='cursor-pointer' onClick={() => handleClick(onContactClick)}>Contact Us</li>
            </ul>
          )}

          {/* Hamburger icon - mobile/tablet only */}
          {!isPrivacyPolicyPage && (
            <button
              className='lg:hidden'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        <div className='border-b border-[#e4ddc9]'></div>

        {/* Mobile dropdown menu */}
        {!isPrivacyPolicyPage && menuOpen && (
          <ul className='lg:hidden flex flex-col list-none gap-4 p-5 m-0 text-[18px] bg-inherit'>
            <li>Home</li>
            <li onClick={() => handleClick(onGamesClick)}>Games</li>
            <li onClick={() => handleClick(onPrivacyClick)}>Privacy Policy</li>
            <li onClick={() => handleClick(onContactClick)}>Contact Us</li>
          </ul>
        )}
      </div>
    </>
  )
}
export default Navbar