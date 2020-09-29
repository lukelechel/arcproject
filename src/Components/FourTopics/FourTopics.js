import React from 'react';
import './FourTopics.css';

const imgPrefix = "../../resources/imgs/"

const topicList = [
    {
        name: "Window Treatments",
        imgFileName: "Site-Grid-Treatment.jpg",
        imgAlt: "Window treatments",
        link: 'window-treatments'
    },
    {
        name: "Window Tinting",
        imgFileName: "Site-Grid-Tinting.jpg",
        imgAlt: "Tinted windows",
        link: 'window-tinting'
    },
    {
        name: "Motorization",
        imgFileName: "Site-Grid-Motorization.jpg",
        imgAlt: "Remote control raising or lowering window treatments",
        link: 'error'
    },
    {
        name: "Current Promotions",
        imgFileName: "Site-Grid-Promotion.jpg",
        imgAlt: "Inside a home with window treatments",
        link: 'current-promotions'
    }
]

const FourTopics = () => {
  return (
    <div id="fourTopicsContainer">
        {
            topicList.map(x => {
                return (
                    <a href={`./${x.link}`} className="topicContainer" key={x.name}>
                        <img src={`${imgPrefix}${x.imgFileName}`} alt={x.imgAlt} />
                        <div id="topicTitleContainer">
                            <p id="topicTitle">{x.name}</p>
                        </div>
                    </a>
                )
            })
        }
    </div>
  )
}

export default FourTopics;