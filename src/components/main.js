import React from "react"
import Header from "./header/header"
import NavigationBar from "./navigationbar"
import About from "./about/about"
import Menu from "./menu/menu"
import Contact from "./contact/contact"
import Footer from "./footer/footer"
import { Navbar } from "react-bulma-components"
import { Link } from "react-router-dom"
import FadeIn from "react-fade-in"
import Scrollchor from "react-scrollchor" 

export default function Main() {
    return (
        <>
            <FadeIn transitionDuration={500}>
                <Header />
            </FadeIn>
            <NavigationBar>
                <Navbar.Item><Scrollchor to="#about" animate={{duration: 500}}>about</Scrollchor></Navbar.Item>
                <Navbar.Item><Scrollchor to="#menu" animate={{duration: 500}}>menu</Scrollchor></Navbar.Item>
                <Navbar.Item><Scrollchor to="#contact" animate={{duration: 500}}>contact</Scrollchor></Navbar.Item>
                <Navbar.Item><Link to="/gallery">gallery</Link></Navbar.Item> 
            </NavigationBar>
            <FadeIn transitionDuration={500}>
                <About />
                <Menu />
                <Contact />
                <Footer />
            </FadeIn>
        </>
    )
}