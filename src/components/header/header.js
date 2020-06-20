import React from "react"
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
                        <a href="/" className="navbar-item">about</a>
                        <a href="#menu" className="navbar-item">menu</a>
                        <a href="#contact" className="navbar-item">contact</a>
                    </div>
                </div>
            </nav>
        </>
    )
}