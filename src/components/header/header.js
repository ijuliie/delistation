import React from "react"
import Scrollchor from "react-scrollchor"
import { Navbar } from "react-bulma-components"
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
        </>
    )
}