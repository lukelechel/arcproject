import React from 'react'
import './Carousel.css'

const imgPrefix = "../../resources/imgs/"

class Carousel extends React.Component {
    constructor(props) {
        super()

        this.state = {
            carouselIndex: 0,
            carouselLength: props.carouselLibrary.length,
            deckIndex: 0,
            deckLength: props.carouselLibrary.length
        }

        this.backASlide = this.backASlide.bind(this)
        this.forwardASlide = this.forwardASlide.bind(this)
    }

    backASlide() {
        let carouselIndex = this.state.carouselIndex
        let carouselLength = this.state.carouselLength

        if (carouselIndex < 1) {
            carouselIndex = carouselLength - 1
        } else {
            carouselIndex--
        }

        this.setState({
            carouselIndex: carouselIndex
        })

    }

    forwardASlide() {
        let carouselIndex = this.state.carouselIndex
        let carouselLength = this.state.carouselLength

        if (carouselIndex === carouselLength - 1) {
            carouselIndex = 0
        } else {
            carouselIndex++
        }

        this.setState({
            carouselIndex: carouselIndex
        })
    }

    backDeck() {
        return console.log('backward deck')
    }

    forwardDeck() {
        return console.log('forward deck')
    }

    render() {
        return (
            <div id={`${this.props.carouselTitle}Carousel`} className="carouselContainer">
                <h1 className="carouselTitle">{this.props.carouselTitle}</h1>
                {
                    this.props.carouselLibrary.map((x, index) => {
                        return (
                            <div id={`${this.props.carouselTitle}CarouselContainer`} key={x.imgFileName}>
                                <div id={`${this.props.carouselTitle}${x.imgFileName}`} className={`${index === this.state.carouselIndex ? 'visible' : 'invisible'} carouselSlide`} key={x.imgFileName}>
                                    <div className="slideLine">
                                        <div className="lastSlide" onClick={this.backASlide}>&#10094;</div>
                                        <img src={`${imgPrefix}${x.imgFileName}.jpg`} alt={x.imgAlt} />
                                        <div className="nextSlide" onClick={this.forwardASlide}>&#10095;</div>
                                    </div>
                                    <h2 className="caption">{x.title}</h2>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="carouselDeck">
                    <div className={`${this.props.carouselLibrary.length > 7 ? 'visible' : 'invisible'} lastDeck`} onClick={this.backDeck}>&#10094;</div>
                    {
                        this.props.carouselLibrary.map((x, index) => {
                            return (
                                <img
                                    src={`${imgPrefix}${x.imgFileName}.jpg`}
                                    alt={x.imgAlt}
                                    className={`${index === this.state.carouselIndex ? 'visible' : 'invisible'} carouselSlideOptions`}
                                    id={`${x.imgFileName}Caption`}
                                    key={x.imgFileName} />
                            )
                        })
                    }
                    <div className={`${this.props.carouselLibrary.length > 7 ? 'visible' : 'invisible'} nextDeck`} onClick={this.forwardDeck}>&#10095;</div>
                </div>
            </div>
        )
    }
}

export default Carousel