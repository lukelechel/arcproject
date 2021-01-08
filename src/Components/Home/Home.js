import React from 'react'
import './Home.css'

import MenuBar from '../MenuBar/MenuBar'
import ConsultSetup from '../ConsultSetup/ConsultSetup'
import FourTopics from '../FourTopics/FourTopics'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'

const Home = () => (<div>
    <MenuBar />
    <img
        src="../../resources/imgs/Home-Banner-Template-2.jpg"
        alt="Living room"
        id="livingRoomImg"
    />
    <div id="homePromo">
        <h1>Cordless Convenience!</h1>
        <p>Simplify your style with our FREE Cordless Lift upgrade or go for the ultimate in ease and style with our NEW Motorized Wand control. Check out our Current Promotions page for details!</p>
    </div>
    <ConsultSetup id="home" />
    <FourTopics />
    <div id="needFillersContainer">
        <div className="needFillColumn" id="needFillColumnFirst">
            <h1>View Our Testimonials</h1>
            <p>We are so proud of the work that we do for our customers. Please take a moment and read what they have to say about their experience working with our team!</p>
            <h2>Testimonials</h2>
        </div>
        <div className="needFillColumn">
            <h1>Need a Quote?</h1>
            <p>We pride ourselves on being able to provide custom &amp; quick quotes to our customers. Use this form or give us a call so we can get you a quote that suits your specific needs.</p>
            <h2>Request Now</h2>
        </div>
        <div className="needFillColumn" id="needFillColumnLast">
            <h1>The ARC Experience</h1>
            <p>Our process is simple - Our designers will meet with you on-site, run through our samples, and measure for an exact quote. Then, our team will install your treatments.</p>
            <h2>Learn More</h2>
        </div>
    </div>
    <Testimonials />
    <Footer />
</div>)

export default Home
