import React from "react"
import { Link } from "react-router-dom"
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
                        <Link to="/" className="navbar-item">about</Link>
                        <Link to="/menu" className="navbar-item">menu</Link>
                        <Link className="navbar-item">contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}