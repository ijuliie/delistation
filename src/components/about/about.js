import React from "react"
import logo from "../../assets/white-logo-drop-shadow.png"
import { Link } from "react-router-dom"
import { Box, Columns } from "react-bulma-components"
import "./about.scss"

export default function About(){
    return (
        <>
            <div id="about" className="about">
                <h1 className="title has-text-centered">About Us</h1>
                <Box>
                    <div className="row">
                        <Columns className="is-gapless">
                            <Columns.Column className="intro-wrapper">
                                <section className="intro">
                                    <p>We put the "deli" in</p>
                                    <p>"delicious"!</p>
                                </section>
                                <section className="description">
                                    <p className="has-text-centered">The Deli Station is a newly opened sandwich shop since October 2019.</p>
                                    <p className="has-text-centered">Come and experience our creative sandwiches, salads, and soups in Santa Ana!</p>
                                    <p className="has-text-centered">Check out our <Link style={{color: "#750d37"}} to="/gallery">GALLERY</Link></p>
                                </section>
                            </Columns.Column>

                            <Columns.Column>
                                <div className="italiansub">
                                        <div><img className="logo" alt="logo" src={logo} /></div>      
                                </div>
                            </Columns.Column>
                        </Columns>
                    </div>
                </Box>
            </div> 
        </>
    )
}