import React from 'react'
import './MenuBar.css'

const imgFilePath = '../../resources/imgs/'

const navBarLibrary = [
    {
        name: 'Window Treatments',
        linkSrc: './window-treatments'
    },
    {
        name: 'Window Tinting',
        linkSrc: './window-tinting'
    },
    {
        name: 'Our Portfolio',
        linkSrc: './portfolio'
    },
    {
        name: 'Contact',
        linkSrc: './contact'
    }
]

const serviceLibrary = [
    {
        name: 'Facebook',
        iconFileName: 'facebook',
        url: 'https://www.facebook.com/ARCWindowTintingLLC'
    },
    {
        name: 'LinkedIn',
        iconFileName: 'linkedin',
        url: 'https://www.linkedin.com/company/arc-window-treatments-tinting'
    },
    {
        name: 'Instagram',
        iconFileName: 'instagram',
        url: 'https://www.instagram.com/arc.window.treatments/'
    },
    {
        name: 'Twitter',
        iconFileName: 'twitter',
        url: 'https://twitter.com/ARCwindowTINT'
    },
    {
        name: 'Houzz',
        iconFileName: 'houzz',
        url: 'https://www.houzz.com/pro/arcwindowtreatments/arc-window-treatments-and-tinting'
    },
]

class MenuBar extends React.Component {
    render() {
        const logoClick = () => {
            return window.location.href='/'
        }

        return (
            <div id="menuBarContainer">
                <img
                    src="../../resources/imgs/logo.svg"
                    alt="Arc Window Treatments and Tinting logo"
                    id="logo"
                    onClick={logoClick} />
                <div id="menuBarRight">
                    <ul id="contactBar">
                        <li>
                            <a href="tel:765-701-8496">765.701.8496</a>
                        </li>
                        <li>
                            <a href="mailto:info@arcwindowtreatments.com">Email Us</a>
                        </li>
                        <li>
                            <img
                            src="../../resources/imgs/3m-logo.svg"
                            alt="3M logo"
                            id="threemLogo" />
                            Authorized Window Film Dealer
                        </li>
                        <li>
                            <ul id="socialIcons">
                                {
                                    serviceLibrary.map(x => {
                                        return (
                                            <li key={`${x.name}Icon`}>
                                                <img src={`${imgFilePath}${x.iconFileName}.svg`} alt="i" />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                    <ul id="navBar">
                        {
                            navBarLibrary.map(x => {
                                return (
                                    <li key={x.name}>
                                        <a href={x.linkSrc} alt={x.name}>{x.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default MenuBar