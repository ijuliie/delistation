import React from "react"
import Scrollchor from "react-scrollchor"
import { Button, Navbar } from "react-bulma-components"
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
                    <Navbar.Item><Scrollchor to="#about">gallery</Scrollchor></Navbar.Item>
                    <Navbar.Item><Scrollchor to="#about">about</Scrollchor></Navbar.Item>
                    <Navbar.Item><Scrollchor to="#menu" animate={{duration: 300}}>menu</Scrollchor></Navbar.Item>
                    <Navbar.Item><Scrollchor to="#contact">contact</Scrollchor></Navbar.Item>
                </Navbar.Menu>
            </Navbar>
        </>
    )
}