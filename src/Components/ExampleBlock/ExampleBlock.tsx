import React from 'react'
import './ExampleBlock.css'

const imgPrefix = "../../resources/imgs/"

interface ExampleBlockBase {
    imgFileName: string,
    title: string,
    body: string,
    moreInfoLink: string,
    portfolioLink: string
}

const ExampleBlock = ({ blockLibrary }: { blockLibrary: ExampleBlockBase[] }) => {return (<div>
    {blockLibrary.map(x => (<div id={`${x.title}Block`} className="exampleBlock" key={x.title}>
        <img
            src={`${imgPrefix}${x.imgFileName}.jpg`}
            alt={x.title}
            className="blockExImg" />
        <h1 className="blockExTitle">{x.title}</h1>
        <p className="blockExDescription">{x.body}</p>
        <div className="buttonSection">
            <h2 className="blockExMoreInfoButton">More Info</h2>
            <h2 className="blockExPortfolioLinkButton">Portfolio</h2>
        </div>
    </div>))}
</div>)}

export default ExampleBlock