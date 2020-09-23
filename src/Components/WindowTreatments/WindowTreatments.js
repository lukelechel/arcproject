import React from 'react';
import './WindowTreatments.css';

import MenuBar from '../MenuBar/MenuBar'
import NavPath from '../NavPath/NavPath'
import ExampleBlock from '../ExampleBlock/ExampleBlock'
import FourTopics from '../FourTopics/FourTopics'
import Footer from '../Footer/Footer'

const currentPath = "Window Treatments"

const windowTreatmentLibrary = [
    {
        imgFileName: "Window-Tinting-Blinds",
        title: "Blinds",
        body: "Blinds are a great treatment option for light control. Made with high quality materials, blinds feature slats which can be tilted or angled to suit your needs. Our blinds have versatile operation controls for added privacy.",
        moreInfoLink: "",
        portfolioLink: ""
    },
    {
        imgFileName: "Window-Tinting-Shades",
        title: "Shades",
        body: "Shades provide varying levels of light control and privacy. Offering a variety of materials and styles, shades can match any decor. Solar shades protect from heat and UV rays while remaining easy to operate and maintain.",
        moreInfoLink: "",
        portfolioLink: ""
    },
    {
        imgFileName: "Window-Tinting-Shutters",
        title: "Shutters",
        body: "Shutters are a timeless classic that add value, structure, and style to your home. Available in wood and composite construction in a wide-range of colors and options, our shutters can complement and enhance any style.",
        moreInfoLink: "",
        portfolioLink: ""
    },
    {
        imgFileName: "Window-Tinting-Drapery",
        title: "Drapery",
        body: "Drapery is a wonderful addition to your current or new window treatments. Pair your blinds, shades, or shutters with our drapery and truly elevate the look of your windows. Drapery is a great solution for eliminating side light gaps.",
        moreInfoLink: "",
        portfolioLink: ""
    },
    {
        imgFileName: "Window-Tinting-Motorization",
        title: "Motorization",
        body: "Motorization allows treatments to open and close at the touch of a button. Convenient and easy to use, our options can fit every budget. Powered by a quiet motor and controlled by remote, motorization is a great solution for hard to reach windows.",
        moreInfoLink: "",
        portfolioLink: null
    }
]

const WindowTreatments = () => {
    return (
        <div>
            <MenuBar />
            <NavPath path={currentPath} />
            <img src="../../resources/imgs/Window-Tinting-Header.jpg" alt="Window treatments in a bedroom" id="bedroomImg" />
            <div className="pageContent">
                <h1 className="pageTitle">Window Treatments</h1>
                <p className="pageDescription">Window treatments are an area where style and functionality come together in a home or business. Our wide selection of styles, sizes, colors and controls allow you to strike the perfect balance of looking beautiful and working for you exactly the way you need.</p>
                <div className="exampleBlockSection">
                    <ExampleBlock blockLibrary={windowTreatmentLibrary} />
                </div>
                <FourTopics />
            </div>
            <Footer />
        </div>
  )
}

export default WindowTreatments