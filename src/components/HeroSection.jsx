import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Copy, Check } from 'lucide-react'
import Characters from './../assets/characters.svg'
import GameLogo from './../assets/game-logo.svg'
import PlayStoreLogo from './../assets/playstore.svg'
import ShieldIcon from './../assets/shield.svg'
import ContactIcon from './../assets/contact.svg'

const HeroSection = ({
  highlightGames, highlightPrivacy, highlightContact, gamesRef, privacyRef, contactRef}) => {
  const [copied, setCopied] = useState(false)
  const email = 'felixstudiogames@gmail.com'
  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.felixstudiogames.callbreakmaster'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightClasses = (active) =>
    `transition-all duration-500 ${
      active ? 'border-[#41445D] ring-4 ring-[#41445D]/30 scale-[1.02]' : 'border-gray-100'
    }`

  return (
    <section className='px-5 py-10 md:px-10 lg:px-[140px] lg:py-[40px] flex flex-col gap-6'>

      {/* Top row: Welcome + Featured Games (3-col grid, 2+1 split) */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2 h-auto lg:h-[440px] bg-[#41445D] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between gap-6'>
          <div className='text-white flex-1'>
            <h2 className='text-3xl md:text-4xl font-medium mb-1'>Welcome To</h2>
            <h1 className='text-3xl md:text-5xl font-extrabold mb-5'>Felix Studio Games</h1>
            <p className='text-sm md:text-base opacity-90 mb-4 leading-relaxed'>
              Felix Studio Games is comprised of a global team of over 10 seasoned professionals, all united by a shared passion and dedication to mobile game creation.
            </p>
            <p className='text-sm md:text-base opacity-90 leading-relaxed'>
              We create games for mobile platforms like Google Play and App Store. Our games have high engagement time, long-term retention, and a growing userbase.
            </p>
          </div>
          <img
            src={Characters}
            alt='hero illustration'
            className='w-[220px] md:w-[280px] rounded-2xl'
          />
        </div>

        <div ref={gamesRef} className={`h-auto lg:h-[440px] bg-[#FFFDF5] rounded-3xl p-8 shadow-sm border flex flex-col transition-all duration-500 ${
            highlightGames
              ? 'border-[#41445D] ring-4 ring-[#41445D]/30 scale-[1.02]'
              : 'border-gray-100'
          }`}>
          <h2 className='text-2xl md:text-3xl font-extrabold text-[#41445D] leading-tight mb-1'>Checkout</h2>
          <h2 className='text-2xl md:text-3xl font-extrabold text-[#41445D] leading-tight mb-4'>Our Featured Games</h2>
          <p className='text-[16px] text-gray-500 mb-6 leading-relaxed'>
            We create games for mobile platforms like Google Play and App Store. We focus on long-term sustainability and profitability rather than short-term gains!
          </p>

          <div className='lg:flex items-center gap-4 mt-auto'>
            <img
              src={GameLogo}
              alt='featured game'
              className='w-[170px] h-[170px] rounded-xl flex-shrink-1 md:mb-1'
            />
            <div>
              <div className='lg:mt-0 mt-2'>
                <h3 className='font-bold text-[#41445D] lg:mb-1 text-[24px]'>Call Break Master</h3>
                <p className='text-[14px] text-gray-500 mb-3 leading-relaxed'>
                  Play the classic Call Break and master strategic card gameplay experience.
                </p>
              </div>
              <a href={playStoreLink} className='flex gap-2 text-xs py-2'>
                <img src={PlayStoreLogo} alt="PlayStore" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: Privacy Policy + Contact Us (own 2-col grid, full width) */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div ref={privacyRef}
          className={`h-auto sm:h-[300px] bg-[#FFFDF5] rounded-3xl p-8 shadow-sm border flex justify-between gap-6 ${highlightClasses(highlightPrivacy)}`}>
          <div>
            <h2 className='text-3xl font-extrabold text-[#41445D] mb-4'>Privacy Policy</h2>
            <p className='text-[16px] text-gray-600 mb-3 leading-relaxed'>
              This Privacy Policy explains how Felix Studio Games collects, uses, and shares information when you use our mobile game.
            </p>
            <p className='text-[16px] text-gray-600 mb-4 leading-relaxed'>
              By using our product, you agree to the collection and use of information in accordance with this policy.
            </p>
            <Link to='/privacy-policy' className='text-sm font-semibold text-[#41445D] underline'>Read More</Link>
          </div>
          <div className='hidden sm:flex flex-shrink-0 w-[148.78px] h-[170.45] mt-[30px]'>
            <img src={ShieldIcon} alt="Shield" />
          </div>
        </div>

        <div ref={contactRef}
          className={`h-auto sm:h-[300px] bg-[#FFFDF5] rounded-3xl p-8 shadow-sm border flex justify-between gap-6 ${highlightClasses(highlightContact)}`}>
          <div className='flex-1'>
            <h2 className='text-3xl font-extrabold text-[#41445D] mb-4'>Contact Us</h2>
            <p className='text-[16] text-gray-600 mb-4'>
              If you have any questions or suggestions, contact us at:
            </p>
            <div className='flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-2'>
              <span className='text-sm text-gray-700 truncate'>{email}</span>
              <button
                onClick={handleCopy}
                className='flex items-center gap-1 text-cyan-600 text-sm font-medium flex-shrink-0 ml-3 cursor-pointer'
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <p className='text-[14px] text-gray-400'>* Get a response within 24 hrs</p>
          </div>
          <div className='hidden sm:flex flex-shrink-0 w-[155px] h-[153px] ml-[30px] mt-[50px]'>
            <img src={ContactIcon} alt="Contact" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection