import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../assets/logo-02.svg";
import PlayStoreLogo from './../assets/playstore.svg'
import Banner from './../assets/feature-graphic.svg'
import Breadcrumb from './../components/BreadCrumbs'

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

const features = [
  'Classic Call Break gameplay',
  'Play offline anytime, anywhere',
  'Smooth and responsive controls',
  'Daily rewards and bonus coins',
  'Clean and attractive card visuals',
  'Optimized and lightweight performance',
  'Strategic trick-taking gameplay',
]

const rules = [
  { text: 'Win tricks according to your bid and finish the game with the highest score. Missing your bid results in penalties.' },
  { title: 'Bidding (Call):', text: 'Choose how many tricks (1–8) you expect to win in a round. Higher bids offer greater rewards but also higher risk.' },
  { title: 'Gameplay:', items: ['Players must follow the leading suit if possible', 'The highest card of the leading suit wins the trick', 'The winner of a trick leads the next round'] },
  { title: 'Trump Rules:', items: ['Spades are the trump suit', 'If you do not have the leading suit, you may play a trump card', 'If no trump is available, any card may be played'] },
  { title: 'Over Trump Rule:', text: 'If another player has already used a trump card, you must play a higher trump card if possible.' },
  { title: 'Scoring:', items: ['Exact bid: 3/3 → Score: 3', 'Extra tricks: 4/3 → Score: 3.1', 'Missed bid: 2/3 → Score: -3'] },
  { title: 'Winner:', text: 'After 4 rounds, the player with the highest total score wins the match.' },
]

const info = [
  { label: 'Release Date', value: '1st September, 2026' },
  { label: 'Genre', value: 'Card Game, Board Game' },
  // { label: 'Rating', value: '18+ Mature Audience Only' },
  { label: 'Privacy Policy', value: 'Read our Privacy Policy', to: '/call-break-master/privacy-policy' }
]

const cardClass = 'bg-[#FFFDF5] rounded-3xl border border-gray-100 shadow-sm'

const CallBreakMaster = () => {
  return (
    <section className='px-5 py-30 pb-10 md:px-10 lg:px-[140px] lg:pt-[30px] flex flex-col gap-6 text-[#41445D]'>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Call Break Master' }]} />
      {/* Hero card */}
      <div className={`${cardClass} overflow-hidden grid grid-cols-1 lg:grid-cols-[2fr_3fr]`}>
        <div className='p-8 md:p-10 flex flex-col justify-center order-2 lg:order-1'>
          <h2 className='text-3xl md:text-4xl font-light mb-1'>Welcome To</h2>
          <h1 className='text-3xl md:text-5xl font-extrabold mb-2'>Call Break Master</h1>
          <p className='text-lg md:text-xl font-semibold mb-8'>Play the ultimate strategic card game offline anytime, anywhere! </p>
          {/* <p className='text-lg md:text-xl font-light'>Disclaimer:</p>
          <p className='text-lg md:text-xl font-light leading-snug'>
            This game uses strictly Virtual Currency for in-game progression and entertainment. It is intended for adult audiences (18+) for amusement purposes only and does not offer real-money gambling, or any opportunity to win real money or prizes.
          </p> */}
        </div>
        <img
          src={Banner}
          alt='Call Break Master banner'
          className='w-full h-full object-cover rounded-3xl order-1 lg:order-2'
        />
      </div>

      {/* Bottom row: About + Info */}
      <div className='grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-6 items-start'>

        {/* About card */}
        <div className={`${cardClass} order-2 lg:order-1 p-8 md:p-10 text-gray-600 leading-relaxed`}>
          <h2 className='text-3xl md:text-4xl font-extrabold text-[#41445D] mb-4'>About the game</h2>
          <p className='mb-5'>
            Enjoy the classic Call Break card game with smooth gameplay, exciting challenges, virtual score progression, and competitive strategy. Whether you are a beginner or an experienced player, Call Break Master delivers an engaging and enjoyable card gaming experience anytime, anywhere.
          </p>
          <p className='mb-8'>
            Call Break Master is completely free-to-play and designed for offline entertainment using in-game points and virtual score counters.
          </p>

          <h3 className='text-xl font-bold text-[#41445D] mb-3'>Features</h3>
          <ul className='list-disc pl-5 mb-8 space-y-1'>
            {features.map((f) => <li key={f}>{f}</li>)}
          </ul>

          <h3 className='text-xl font-bold text-[#41445D] mb-3'>How to Play</h3>
          <p className='mb-8'>
            Call Break is a strategic trick-taking card game played using a standard 52-card deck. Players bid the number of tricks they expect to win each round. Use smart strategy, timing, and trump cards wisely to defeat opponents and become the Call Break Master.
          </p>

          <h3 className='text-xl font-bold text-[#41445D] mb-4'>Game Rules</h3>
          <div className='space-y-5'>
            {rules.map((r) => (
              <div key={r.title}>
                <p className='font-semibold text-[#41445D]'>{r.title}</p>
                {r.text && <p>{r.text}</p>}
                {r.items && (
                  <ul className='list-disc pl-5'>
                    {r.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <p className='mt-5'>
            Challenge yourself, improve your strategy, and enjoy endless card battles in Call Break Master. <br></br>Download now and start playing today!
          </p>
          {/* <p className='mt-5'>
            Disclaimer: Call Break Master is an offline single-player card game intended for casual entertainment. The game uses strictly virtual coins and point counters for in-game scoring and level progression.
          </p> */}
        </div>

        {/* Info card */}
        <aside className={`${cardClass} order-1 lg:order-2 p-8`}>
          {info.map((item) => (
            <div key={item.label} className='border-b border-gray-200 pb-6 mb-6'>
              <h3 className='text-xl font-bold mb-1'>{item.label}</h3>
              {item.to ? (
                <Link
                  to={item.to}
                  className='text-sm text-[#41445D] font-semibold underline hover:text-[#ff5a1f] transition-colors'
                >
                  {item.value}
                </Link>
              ) : (
                <p className='text-sm text-gray-500'>{item.value}</p>
              )}
            </div>
          ))}

          <h3 className='text-xl font-bold mb-1'>Call Break Master</h3>
          <p className='text-sm text-gray-500 mb-4'>
            Play the classic Call Break and master strategic card gameplay experience.
          </p>
          <a
            href='https://play.google.com/store/apps/details?id=com.felixstudiogames.callbreakmaster'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block'
          >
            <img src={PlayStoreLogo} alt='Get it on Google Play' />
          </a>
        </aside>

      </div>
      {/* Footer */}
        <footer className="hidden lg:flex justify-center pt-10 md:px-16 border-t border-[#e4ddc9] mt-[120px]">
            <Logo className="!h-[52px]" />
        </footer>
    </section>
  )
}

export default CallBreakMaster