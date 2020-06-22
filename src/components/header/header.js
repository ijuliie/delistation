import React from "react"
import Scrollchor from "react-scrollchor"
import "./header.scss"

export default function Header(){
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item"><Scrollchor to="#about">about</Scrollchor></a>
                        <a className="navbar-item"><Scrollchor to="#menu" animate={{duration: 350}}>menu</Scrollchor></a>
                        <a className="navbar-item"><Scrollchor to="#contact" >contact</Scrollchor></a>
                    </div>
                </div>
            </nav>
        </>
    )
}