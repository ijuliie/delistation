import React from "react"
import Scrollchor from "react-scrollchor"
import logo from "../../assets/white-logo-drop-shadow.png"
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

            <nav className="navbar">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar">
                    <Scrollchor className="navbar-item" to="#about">gallery</Scrollchor>
                        <Scrollchor className="navbar-item" to="#about">about</Scrollchor>
                        <Scrollchor className="navbar-item" to="#menu" animate={{duration: 300}}>menu</Scrollchor>
                        <Scrollchor className="navbar-item" to="#contact" >contact</Scrollchor>
                    </div>
                </div>
            </nav>
        </>
    )
}