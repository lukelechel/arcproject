import React from 'react';
import './WindowTinting.css';

import MenuBar from '../MenuBar/MenuBar'
import NavPath from '../NavPath/NavPath'
import ExampleBlock from '../ExampleBlock/ExampleBlock'
import FourTopics from '../FourTopics/FourTopics'
import Footer from '../Footer/Footer'

const currentPath = "Window Tinting"

const windowTintingLibrary = [
    {
        imgFileName: "Window-Treatments-Product-Sun-Control-Menu",
        title: "Sun Control Film",
        body: "Solar control window films are very popular in residential and commercial settings when reducing the glare, heat or fading is a primary concern. These seemingly transparent films can allow a home or business to achieve great solar control results without sacrificing the view to the outside.",
        moreInfoLink: "",
        portfolioLink: ""
    },
    {
        imgFileName: "Window-Treatments-Product_Safety-and-Security-Menu",
        title: "Safety & Security Film",
        body: "3M Safety and Security window films are installed onto the glass and secured to the window frame with attachment systems. These films allow for a longer response time & protection in a crisis situation and can be used to slow forced entry for anti-­intrusion, bomb blast mitigation, and windstorm protection.",
        moreInfoLink: "",
        portfolioLink: ""
    },
    {
        imgFileName: "Window-Treatments-Product_Decorative-Menu_2",
        title: "Decorative Film",
        body: "Decorative window films are taking the market by storm with a large variety of ways to create a unique look for a home or business while providing a varying levels of privacy. With frosted, perforated, colored or almost any design pattern in between; Decorative window films are widely being used to create that custom and eye catching look.",
        moreInfoLink: "",
        portfolioLink: ""
    },
    {
        imgFileName: "Window-Treatments-Product-Custom-Film-Menu",
        title: "Custom Film and Graphics",
        body: "Custom film and graphics will set you apart from the crowd. With a variety of products, we can work with you to elevate your space, display your logo/branding, or ensure your privacy at the flip of a switch. Our custom products give you the freedom to explore and push the limits.",
        moreInfoLink: "",
        portfolioLink: ""
    }
]

const WindowTinting = () => {
    return (
        <div>
            <MenuBar />
            <NavPath path={currentPath} />
            <img src="../../resources/imgs/Window-Tinting-Banner.jpg" alt="Tinted windows inside a house facing a beach" id="beachImg" />
            <div className="pageContent">
                <h1 className="pageTitle">Window Tinting</h1>
                <p className="pageDescription">Window film (tinting) has a multitude of uses in a home or business that can be applied to your existing glass. A sun control film is a perfect solution for reducing the glare, heat or fading without the sacrifice of the view, while decorative films create varying amounts of privacy or the exact unique look you are trying to achieve. There are also security window films available that are designed to deter forced entry.</p>
                <div className="exampleBlockSection">
                    <ExampleBlock blockLibrary={windowTintingLibrary} />
                </div>
                <FourTopics />
            </div>
            <Footer />
        </div>
  )
}

export default WindowTinting