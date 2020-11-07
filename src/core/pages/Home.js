import react from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div id="page-top">
            <Navbar page="home" />
            <Profile />
            <Services />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Home
