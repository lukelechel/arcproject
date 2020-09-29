import React from 'react';
import './CurrentPromotions.css';

import MenuBar from '../MenuBar/MenuBar'
import FourTopics from '../FourTopics/FourTopics'
import Footer from '../Footer/Footer'

const CurrentPromotions = () => {
    return (
        <div>
            <MenuBar />
            <div className="pageContent" id="currentPromoContainer">
                <h1>Current Promotions</h1>
                <img
                    src="../../resources/imgs/graber-jun-oct-20-promotion-flyer.jpg"
                    alt="Graber Free Cordless Lift Upgrade flyer"
                    className="flyer" />
                <img
                    src="../../resources/imgs/graber-motorization-wand-sell-sheet.jpg"
                    alt="Graber Motorized Wand flyer"
                    className="flyer" />
                <FourTopics />
            </div>
            <Footer />
        </div>
  )
}

export default CurrentPromotions