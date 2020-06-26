import React from "react"
import logo from "../../assets/white-logo-drop-shadow.png"
import { Link } from "react-router-dom"
import { Columns } from "react-bulma-components"
import "./about.scss"

export default function About(){
    return (
        <>
            <div id="about" className="about">
                
                <div className="row">
                    <Columns className="is-gapless">
                        <Columns.Column className="intro-wrapper">
                            <section className="intro">
                                <p>We put the "deli" in</p>
                                <p>"delicious"! Come</p>
                                <p>visit The Deli Station!</p>
                            </section>
                            <p>Check out our <Link to="/gallery">pictures</Link></p>
                        </Columns.Column>

                        <Columns.Column>
                            <div className="italiansub">
                                    <div><img className="logo" alt="logo" src={logo} /></div>      
                            </div>
                        </Columns.Column>
                    </Columns>
                </div>
            </div> 
        </>
    )
}