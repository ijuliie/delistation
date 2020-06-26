import React from "react"
import About from "./about/about"
import Menu from "./menu/menu"
import Contact from "./contact/contact"
import Header from "./header/header"
import NavigationBar from "./navigationbar"

export default function Main() {
    return (
        <>
            <Header />
            <NavigationBar />
            <About />
            <Menu />
            <Contact />
        </>
    )
}