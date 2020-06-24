import React from "react"
import Scrollchor from "react-scrollchor"
import logo from "../../assets/main-logo.png"
import "./header.scss"

export default function Header(){
    return (
        <>
            <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                    {/* <img src={logo} /> */}
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    </a>
                </div>

                {/* <div class="navbar-menu">
                    <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        Documentation
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                        <a href="#about" class="navbar-item">
                            About
                        </a>
                        <a href="#menu" class="navbar-item">
                            Menu
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider" />
                        <a class="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div> */}

                    <div class="navbar-end">
                    {/* <div class="navbar-start"> */}
                    {/* <a class="navbar-item">
                        Home
                    </a>

                    <a class="navbar-item">
                        Documentation
                    </a> */}

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                        <a href="#about" class="navbar-item">
                            About
                        </a>
                        <a href="#menu" class="navbar-item">
                            Menu
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        </div>
                    </div>
                </div>
            </nav>



            {/* <nav className="navbar">
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
                        <a className="navbar-item"><Scrollchor to="#menu" animate={{duration: 300}}>menu</Scrollchor></a>
                        <a className="navbar-item"><Scrollchor to="#contact" >contact</Scrollchor></a>
                    </div>
                </div>
            </nav> */}
        </>
    )
}