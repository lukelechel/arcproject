import React, { useState } from 'react'
import './MenuBar.css'
import { Link } from 'react-router-dom'

const imgFilePath = '../../resources/imgs/'

const navBarLibrary = [
    {
        name: 'Window Treatments',
        linkSrc: 'window-treatments'
    },
    {
        name: 'Window Tinting',
        linkSrc: 'window-tinting'
    },
    {
        name: 'Our Portfolio',
        linkSrc: 'portfolio'
    },
    {
        name: 'Contact',
        linkSrc: 'contact'
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

export default function MenuBar() {

    const [menuBarOpen, setMenuBarOpen] = useState(false)

    const logoClick = () => window.location.href='/'

    const menuBarClick = () => menuBarOpen ? setMenuBarOpen(false) : setMenuBarOpen(true)

    return (<div id="menuBarContainer">
        <div id="desktopVersionContainer" className="desktopOnly">
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
                            {serviceLibrary.map((x, i) => (<li key={i}>
                                    <img src={`${imgFilePath}${x.iconFileName}.svg`} alt={`${x.name} logo`} />
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <div id="navBar">
                    {navBarLibrary.map((x, i) => (<Link key={i} to={x.linkSrc}>{x.name}</Link>))}
                </div>
            </div>
        </div>
        <div id="mobileVersionContainer" className="mobileOnly">
            <ul id="topNav">
                <li>
                    <a href="tel:765-701-8496">
                        <img
                            src="../resources/imgs/phone.svg"
                            alt="Phone"
                            className="vectorIcon" />
                    </a>
                </li>
                <li>
                    <a href="mailto:info@arcwindowtreatments.com">
                        <img
                            src="../resources/imgs/envelope.svg"
                            alt="Envelope"
                            className="vectorIcon" />
                    </a>
                </li>
                <li id="mobileThreeMLogo">
                    <img
                        src="../../resources/imgs/3m-logo.svg"
                        alt="3M logo"
                        id="threemLogo" />
                        Authorized Window Film Dealer
                </li>
            </ul>
            <ul id="bottomNav">
                <li id="mobileLogoContainer">
                    <img
                        src="../../resources/imgs/logo.svg"
                        alt="Arc Window Treatments and Tinting logo"
                        id="logo"
                        onClick={logoClick} />
                </li>
                <li id="menuIconContainer">
                    <img
                        src="../../resources/imgs/bars.svg"
                        alt="Menu icon"
                        id="menuIcon"
                        onClick={menuBarClick} />
                </li>
            </ul>
            <ul id="mobileMenuList" className={menuBarOpen ? 'visible' : 'invisible'}>
                {navBarLibrary.map((x, i) => (<li key={i}>
                    <a href={`./${x.linkSrc}`}>{x.name}</a>
                </li>))}
            </ul>
        </div>
    </div>)
}
