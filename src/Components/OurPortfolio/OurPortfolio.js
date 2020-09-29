import React from 'react';
import './OurPortfolio.css';

import MenuBar from '../MenuBar/MenuBar'
import NavPath from '../NavPath/NavPath'
import ConsultSetup from '../ConsultSetup/ConsultSetup'
import Carousel from '../Carousel/Carousel'
import FourTopics from '../FourTopics/FourTopics'
import Footer from '../Footer/Footer'

const currentPath = "Portfolio"

const blindsCarouselLibrary = require('./blindsCarouselLibrary.json')

const shadesCarouselLibrary = require('./shadesCarouselLibrary.json')

const shuttersCarouselLibrary = require('./shuttersCarouselLibrary.json')

const draperyCarouselLibrary = require('./draperyCarouselLibrary.json')

const sunControlFilmCarouselLibrary = require('./sunControlFilmCarouselLibrary.json')

const safetySecurityFilmCarouselLibrary = require('./safetySecurityFilmCarouselLibrary.json')

const decorativeFilmLibrary = require('./decorativeFilmLibrary.json')

const customFilmGraphicsCarouselLibrary = require('./customFilmGraphicsCarouselLibrary.json')

class OurPortfolio extends React.Component {
    render() {
        return (
            <div>
                <MenuBar />
                <NavPath path={currentPath} />
                <img src="../../resources/imgs/Portfolio-Banner_1.jpg" alt="Arc Window Treatments and Tinting logo on glass" id="logoDoor" />
                <div className="pageContent">
                    <ConsultSetup id="portfolio" />
                    <p className="pageDescription">We’ve done everything… from blinds, shades, shutters, &amp; drapery to sun control and security window films. Scroll below to see our many projects!</p>
                    <Carousel carouselTitle="Blinds" carouselLibrary={blindsCarouselLibrary} />
                    <Carousel carouselTitle="Shades" carouselLibrary={shadesCarouselLibrary} />
                    <Carousel carouselTitle="Shutters" carouselLibrary={shuttersCarouselLibrary} />
                    <Carousel carouselTitle="Drapery" carouselLibrary={draperyCarouselLibrary} />
                    <Carousel carouselTitle="Sun Control Film" carouselLibrary={sunControlFilmCarouselLibrary} />
                    <Carousel carouselTitle="Safety &amp; Security Film" carouselLibrary={safetySecurityFilmCarouselLibrary} />
                    <Carousel carouselTitle="Decorative Film" carouselLibrary={decorativeFilmLibrary} />
                    <Carousel carouselTitle="Custom Film &amp; Graphics" carouselLibrary={customFilmGraphicsCarouselLibrary} />
                </div>
                <FourTopics />
                <Footer />
            </div>
      )
    }
}

export default OurPortfolio