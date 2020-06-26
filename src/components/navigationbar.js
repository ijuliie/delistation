import React from "react"
import Scrollchor from "react-scrollchor"
import { Navbar } from "react-bulma-components"

export default function NavigationBar(){
    return (
        <>
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Burger aria-label="menu" aria-expanded="false">
                    </Navbar.Burger>
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Item style={{"color": "#ffffff"}} href="/">home</Navbar.Item>
                    <Navbar.Item><Scrollchor to="#about" animate={{duration: 200}}>about</Scrollchor></Navbar.Item>
                    <Navbar.Item><Scrollchor to="#menu" animate={{duration: 200}}>menu</Scrollchor></Navbar.Item>
                    <Navbar.Item><Scrollchor to="#contact" animate={{duration: 200}}>contact</Scrollchor></Navbar.Item>
                </Navbar.Menu>
            </Navbar>
        </>
    )
}