import React, { useState, useRef } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Home from './pages/Home'
import CallBreakMaster from './pages/CallBreakMaster'
import CallBreakMasterPrivacyPolicy from './pages/CallBreakMasterPrivacyPolicy'

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
      <HashRouter>
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
            <Route path='/call-break-master' element={<CallBreakMaster />} />
            <Route path='/call-break-master/privacy-policy' element={<CallBreakMasterPrivacyPolicy />} />
          </Routes>
      </HashRouter>
      
    </>
  )
}

export default App