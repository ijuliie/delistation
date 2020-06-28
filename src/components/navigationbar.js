import React, { useState } from "react"
import Scrollchor from "react-scrollchor" 
import { Navbar } from "react-bulma-components"
import { useMediaQuery } from "react-responsive"
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

export default function NavigationBar(){
    const isDesktop = useMediaQuery({query: "(min-width:1020px)"})
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            {
                isDesktop ? 
                <Navbar>
                    <Navbar.Brand>
                        <Navbar.Burger aria-label="menu" aria-expanded="false">
                        </Navbar.Burger>
                    </Navbar.Brand>
                    <Navbar.Menu style={{backgroundColor: "#750D37"}}>
                        <Navbar.Item><Scrollchor to="#about" animate={{duration: 200}}>about</Scrollchor></Navbar.Item>
                        <Navbar.Item><Scrollchor to="#menu" animate={{duration: 200}}>menu</Scrollchor></Navbar.Item>
                        <Navbar.Item><Scrollchor to="#contact" animate={{duration: 200}}>contact</Scrollchor></Navbar.Item>                    </Navbar.Menu>
                </Navbar>
            :
                <Navbar>
                    <SlideDown>
                        <Navbar.Brand>
                            <Navbar.Burger className={ isActive ? "is-active" : "" } onClick={() => setIsActive(!isActive)} aria-label="menu" aria-expanded="false">
                            </Navbar.Burger>
                        </Navbar.Brand>
                        <Navbar.Menu style={ isActive ? { display: "block"} : {}}>
                            <Navbar.Item><Scrollchor to="#about" animate={{duration: 200}}>about</Scrollchor></Navbar.Item>
                            <Navbar.Item><Scrollchor to="#menu" animate={{duration: 200}}>menu</Scrollchor></Navbar.Item>
                            <Navbar.Item><Scrollchor to="#contact" animate={{duration: 200}}>contact</Scrollchor></Navbar.Item>
                        </Navbar.Menu>
                    </SlideDown>
                </Navbar>
            }
        </>
    )
}