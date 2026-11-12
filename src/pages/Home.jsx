import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'

const Home = ({highlightGames, highlightPrivacy, highlightContact, gamesRef, privacyRef, contactRef, onContactClick}) => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.state?.scrollTo === 'contact') {
        // small delay so the page has finished rendering before scrolling
        const timer = setTimeout(() => {
            onContactClick()
            // clear the state so a refresh or back-navigation doesn't re-trigger it
            navigate(location.pathname, { replace: true, state: null })
        }, 100)
        return () => clearTimeout(timer)
        }
    }, [location.state])

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