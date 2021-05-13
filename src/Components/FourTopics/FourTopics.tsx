import React from 'react'
import './FourTopics.css'
import { Link } from 'react-router-dom'

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

const FourTopics = () => (<div id="fourTopicsContainer">
    {
        topicList.map((x, i) => (<Link to={`/${x.link}`} className="topicContainer" key={i}>
            <img src={`${imgPrefix}${x.imgFileName}`} alt={x.imgAlt} />
            <div id="topicTitleContainer">
                <p id="topicTitle">{x.name}</p>
            </div>
        </Link>))
    }
</div>)

export default FourTopics