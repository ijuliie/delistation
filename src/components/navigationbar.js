import React, { useState } from "react"
import { Navbar } from "react-bulma-components"
import { useMediaQuery } from "react-responsive"
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

export default function NavigationBar({children}){
    const isDesktop = useMediaQuery({query: "(min-width:1020px)"})
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            {
                isDesktop ? 
                <Navbar>
                    <Navbar.Brand>
                        <Navbar.Burger className={ isActive ? "is-active" : "" } onClick={() => setIsActive(!isActive)} aria-label="menu" aria-expanded="false">
                        </Navbar.Burger>
                    </Navbar.Brand>
                    <Navbar.Menu style={{backgroundColor: "#750D37"}}>
                        {children}
                    </Navbar.Menu>
                </Navbar>
            :
                <Navbar>
                    <SlideDown>
                        <Navbar.Brand>
                            <Navbar.Burger className={ isActive ? "is-active" : "" } onClick={() => setIsActive(!isActive)} aria-label="menu" aria-expanded="false">
                            </Navbar.Burger>
                        </Navbar.Brand>
                        <Navbar.Menu style={ isActive ? { display: "block" } : {} }>
                            {children}
                        </Navbar.Menu>
                    </SlideDown>
                </Navbar>
            }
        </>
    )
}