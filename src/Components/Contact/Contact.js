import React from 'react';
import './Contact.css';

import MenuBar from '../MenuBar/MenuBar'
import NavPath from '../NavPath/NavPath'
import FourTopics from '../FourTopics/FourTopics'
import Footer from '../Footer/Footer'

const currentPath = "Portfolio"

const Contact = () => {
    return (
        <div>
            <MenuBar />
            <NavPath path={currentPath} />
            <img
                src="../../resources/imgs/google-maps-lafayette.png"
                alt="Google Maps display of Lafayette, IN"
                id="googleMaps" />
            <div className="pageContent">
                <h1 id="phoneTitle">765.701.8496</h1>
                <h2 id="tallTitle">Give Us A Call!</h2>
                <div id="sideBySideContent">
                    <div id="contactFormContainer">
                        <h2 className='tallSectionLead'>Contact Us</h2>
                        <form id="contactUsForm">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name"></input>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email"></input>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone"></input>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" rows="" cols="70"></textarea>
                            <label htmlFor="capcha">Capcha</label>
                            <img src="../../resources/imgs/capcha.png" alt="ReCapcha" id="capcha" />
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <div id="serviceLocationsContainer">
                        <h2 className="tallSectionLead">Service Locations</h2>
                        <p>Lafayette, IN: <b>765-701-8496</b></p>
                        <p>Fort Wayne, IN: <b>260-760-1387</b></p>
                        <h3>WE OFFER OUR SERVICES FROM LAFAYETTE, IN TO FORT WAYNE, IN</h3>
                        <p>We’re always available by phone Monday-Friday from 8 AM-5 PM to help with your window treatment and window tinting projects.</p>
                        <p>Schedule an appointment today to get the process started!</p>
                    </div>
                </div>
            </div>
            <FourTopics />
            <Footer />
        </div>
  )
}

export default Contact