import React from 'react'
import './ExampleBlock.css'

const imgPrefix = "../../resources/imgs/"

class ExampleBlock extends React.Component {
    render() {
        return (
            this.props.blockLibrary.map(x => {
                return (
                    <div id={`${x.title}Block`} className="exampleBlock" key={x.title}>
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
                    </div>
                )
            })
        )
    }
}

export default ExampleBlock