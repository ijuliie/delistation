import React from "react"
import Header from "./header/header"
import NavigationBar from "./navigationbar"
import About from "./about/about"
import Menu from "./menu/menu"
import Contact from "./contact/contact"
import Footer from "./footer/footer"

export default function Main() {
    return (
        <>
            <Header />
            <NavigationBar />
            <About />
            <Menu />
            <Contact />
            <Footer />
        </>
    )
}