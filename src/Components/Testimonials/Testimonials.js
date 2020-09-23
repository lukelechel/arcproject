import React from 'react';
import './Testimonials.css';

const testimonialLibrary = [
    {
        name: "Ronald P.",
        body: "ARC did an excellent job removing the tint from my windows. They were an efficient professional team. They did the job exactly as I asked and the price was fair.  When they finished, they cleaned up so well that you would not know that they had been there.  I highly recommend them for all your window tinting needs.  I would hire them again.",
        title: "Homeowner"
    },
    {
        name: "Angie H.",
        body: "ARC Window Treatments & Tinting went above & beyond to assist me with my window covering needs from the moment I purchased my new home. They worked with me to find nice treatments to fit my budget & were exceptionally prompt & courteous when installing the new blinds throughout my home. I highly recommend using them!",
        title: "Homeowner"
    },
    {
        name: "Cindy B.",
        body: "Had ordered an etched glass pantry door, which was beautiful; however, you could see right through the etching; the food and shelves.  ARC came out and showed me hundreds of film that I could add to the back of the door to shield out the food / shelves but still maintain the beauty of the door.  Loved the look, would recommend to anyone.",
        title: "Homeowner"
    },
    {
        name: "Jeanenne G.",
        body: "Outstanding service and attention to detail!  Jenna was absolutely excellent to work by being so flexible with my schedule and meeting with me several times to choose the right color for my shades (always arriving on time too)! Shane & Jenna are a fantastic team and my new transitional shades are beautiful!",
        title: "Homeowner"
    }
]

class Testimonials extends React.Component {
    render() {
        return (
            <div id="testimonialContainer">
                {
                    testimonialLibrary.map(x => {
                        return (
                            <div className="testimonial">
                                <p>{x.body}</p>
                                <h1>{x.name}</h1>
                                <h2>{x.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Testimonials;
