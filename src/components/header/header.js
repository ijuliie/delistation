import React from "react"
import Scrollchor from "react-scrollchor"
import { Navbar } from "react-bulma-components"
import "./header.scss"

export default function Header(){
    return (
        <>
            <div className="banner-wrapper">
                <div className="image-wrapper">
                    <div className="image">
                        <div className="content">
                            <div className="banner">
                                <div className="inner-banner">
                                    <p>Quick.</p>
                                    <p>Tasty.</p>
                                    <p>Simple.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar>
                <Navbar.Brand>
                    <Navbar.Burger aria-label="menu" aria-expanded="false">
                    </Navbar.Burger>
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Item><Scrollchor to="#about" animate={{duration: 200}}>gallery</Scrollchor></Navbar.Item>
                    <Navbar.Item><Scrollchor to="#about" animate={{duration: 200}}>about</Scrollchor></Navbar.Item>
                    <Navbar.Item><Scrollchor to="#menu" animate={{duration: 200}}>menu</Scrollchor></Navbar.Item>
                    <Navbar.Item><Scrollchor to="#contact" animate={{duration: 200}}>contact</Scrollchor></Navbar.Item>
                </Navbar.Menu>
            </Navbar>
        </>
    )
}