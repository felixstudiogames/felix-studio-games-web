import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = ({highlightGames, highlightPrivacy, highlightContact, gamesRef, privacyRef, contactRef}) => {
    return (
        <>
            <div className='pt-[80px] lg:pt-0'>
                <HeroSection
                highlightGames={highlightGames}
                highlightPrivacy={highlightPrivacy}
                highlightContact={highlightContact}
                gamesRef={gamesRef}
                privacyRef={privacyRef}
                contactRef={contactRef}
              />
            </div>
        </>
    )
}

export default Home