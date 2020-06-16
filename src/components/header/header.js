import React from "react"
import { Navbar } from "react-bulma-components"
import "./header.scss"

export default function Header(){
    return (
        <Navbar>
            <li>about</li>
            <li>menu</li>
            <li>contact</li>
        </Navbar>
    )
}