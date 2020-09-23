import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div id="footerContainer">
            <div id="footerColumnContainer">
                <div id="contactColumn" className="footerColumn">
                    <img
                        src="../../resources/imgs/logo.svg"
                        alt="Arc Window Treatments and Tinting logo"
                        className="columnTopper"
                        id="footerLogo" />
                    <div className="footerDivider"></div>
                    <ul id="contactList">
                        <li>
                            <img src="../resources/imgs/phone.svg" alt="Phone" className="vectorIcon" />
                            <a href="tel:765-701-8496">765.701.8496</a>
                        </li>
                        <li>
                            <img src="../resources/imgs/envelope.svg" alt="Envelope" className="vectorIcon" />
                            <a href="mailto:info@arcwindowtreatments.com">info@arcwindowtreatments.com</a>
                        </li>
                        <li>
                        <img src="../resources/imgs/pin.svg" alt="Pin" className="vectorIcon" />
                            <p>Lafayette, IN<br />and<br />Fort Wayne, IN</p>
                        </li>
                    </ul>
                </div>
                <div id="quickLinksColumn" className="footerColumn">
                    <h1 className="columnTopper">Quick Links</h1>
                    <div className="footerDivider"></div>
                    <ul>
                        <li>Meet the Team</li>
                        <li>Warranty</li>
                    </ul>
                </div>
                <div id="missionColumn" className="footerColumn">
                    <h1 className="columnTopper">Mission Statement</h1>
                    <div className="footerDivider"></div>
                    <p>
                        Our goal is to provide our residential and commercial clients with a total window treatments solution. Through the use of custom window treatments, window film, or a combination of the two, ARC Window Treatments & Tinting can help you achieve the benefits of style and functionality.
                    </p>
                </div>
            </div>
            <img src="../../resources/imgs/3m-authorized-image.png" alt="3M authorization stamp" id="threemauthorizationstamp" />
            <p>Arc Window Treatments &amp; Tinting 2020 - All Rights Reserved</p>
        </div>
    )
}

export default Footer