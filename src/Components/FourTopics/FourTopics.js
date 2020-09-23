import React from 'react';
import './FourTopics.css';

const imgPrefix = "../../resources/imgs/"

const topicList = [
    {
        name: "Window Treatments",
        imgFileName: "Site-Grid-Treatment.jpg",
        imgAlt: "hi"
    },
    {
        name: "Window Tinting",
        imgFileName: "Site-Grid-Tinting.jpg",
        imgAlt: "hi"
    },
    {
        name: "Motorization",
        imgFileName: "Site-Grid-Motorization.jpg",
        imgAlt: "hi"
    },
    {
        name: "Current Promotions",
        imgFileName: "Site-Grid-Promotion.jpg",
        imgAlt: "hi"
    }
]

const FourTopics = () => {
  return (
    <div id="fourTopicsContainer">
        {
            topicList.map(x => {
                return (
                    <div className="topicContainer" key={x.name}>
                        <img src={`${imgPrefix}${x.imgFileName}`} alt={x.imgAlt} />
                        <div id="topicTitleContainer">
                            <p id="topicTitle">{x.name}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FourTopics;