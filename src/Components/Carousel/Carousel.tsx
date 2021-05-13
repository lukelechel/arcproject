import React, { useEffect, useState } from 'react'
import './Carousel.css'

const imgPrefix = '../../resources/imgs/'

export default function Carousel(props:any) {

    useEffect(() => {
        const lib = props.carouselLibrary
        setCarouselLength(lib.length)
    }, [props])

    const [carouselIndex, setCarouselIndex] = useState(0)
    const [carouselLength, setCarouselLength] = useState(Number)

    const backASlide = () => carouselIndex < 1 ? setCarouselIndex(carouselLength - 1) : setCarouselIndex(carouselIndex - 1)
    const forwardASlide = () => carouselIndex === carouselLength - 1 ? setCarouselIndex(0) : setCarouselIndex(carouselIndex + 1)

    return (<div id={`${props.carouselTitle}Carousel`} className="carouselContainer">
        <h1 className="carouselTitle">{props.carouselTitle}</h1>
        {props.carouselLibrary.map((x:any, i:number) => (<div id={`${props.carouselTitle}CarouselContainer`} key={i}>
                <div id={`${props.carouselTitle}${x.imgFileName}`} className={`${i === carouselIndex ? 'visible' : 'invisible'} carouselSlide`} key={x.imgFileName}>
                    <div className="slideLine">
                        <div className="lastSlide" onClick={backASlide}>&#10094;</div>
                        <img src={`${imgPrefix}${x.imgFileName}.jpg`} alt={x.imgAlt} />
                        <div className="nextSlide" onClick={forwardASlide}>&#10095;</div>
                    </div>
                    <h2 className="caption">{x.title}</h2>
                </div>
            </div>
        ))}
        <div className="carouselDeck">
            <div className={`${props.carouselLibrary.length > 7 ? 'visible' : 'invisible'} lastDeck`}>&#10094;</div>
            {props.carouselLibrary.map((x:any, i:number) => (<img
                src={`${imgPrefix}${x.imgFileName}.jpg`}
                alt={x.imgAlt}
                className={`${i === carouselIndex ? 'visible' : 'invisible'} carouselSlideOptions`}
                id={`${x.imgFileName}Caption`}
                key={i} />))}
            <div className={`${props.carouselLibrary.length > 7 ? 'visible' : 'invisible'} nextDeck`}>&#10095;</div>
        </div>
    </div>)
}