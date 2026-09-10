import React, { useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Home from './pages/Home'

const App = () => {

  const [highlightGames, setHighlightGames] = useState(false)
    const [highlightPrivacy, setHighlightPrivacy] = useState(false)
    const [highlightContact, setHighlightContact] = useState(false)

    const gamesRef = useRef(null)
    const privacyRef = useRef(null)
    const contactRef = useRef(null)

    const scrollAndHighlight = (ref, setHighlight) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setHighlight(true)
        setTimeout(() => setHighlight(false), 500)
    }

    const handleGamesClick = () => scrollAndHighlight(gamesRef, setHighlightGames)
    const handlePrivacyClick = () => scrollAndHighlight(privacyRef, setHighlightPrivacy)
    const handleContactClick = () => scrollAndHighlight(contactRef, setHighlightContact)

  return (
    <>
      <Navbar
        onGamesClick={handleGamesClick}
        onPrivacyClick={handlePrivacyClick}
        onContactClick={handleContactClick}
      />
    
        <Routes>
          <Route
            path='/'
            element={
              <Home 
                highlightGames={highlightGames}
                highlightPrivacy={highlightPrivacy}
                highlightContact={highlightContact}
                gamesRef={gamesRef}
                privacyRef={privacyRef}
                contactRef={contactRef}
              />
            }
          />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      
    </>
  )
}

export default App