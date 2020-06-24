import React from "react"
import hoursArr from "../hours"
import italiansub from "../../assets/italian-sub.png"
import { useMediaQuery } from "react-responsive"
import logo from "../../assets/white-logo-drop-shadow.png"
import "./about.scss"

export default function About(){
    const isTablet = useMediaQuery({query: "(min-width:768px)"}) 

    return (
        <>
            {
                isTablet ?
                    <div id="about" className="about">

                        <div className="banner-wrapper">
                            <div className="image-wrapper">
                                <div className="image">
                                    <div className="content">
                                        <div className="banner">
                                            <div className="inner-banner">
                                                <img src={logo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="columns">
                                <div className="intro-wrapper column">
                                    <section className="intro">
                                        <p>We put the "deli" in</p>
                                        <p>"delicious"! Come</p>
                                        <p>visit The Deli Station!</p>
                                    </section>

                                    <div className="columns is-mobile">
                                        <section className="column address">
                                            <p className="subtitle">Location:</p>
                                            <p className="subtitle">Downtown Santa Ana</p>
                                            <p className="subtitle">201 East 4th St</p>
                                            <p className="subtitle">Santa Ana, CA 92701</p>
                                        </section>


                                        <section className="column hours">
                                            <p className="subtitle">Hours:</p>
                                            {
                                                hoursArr.map((hour, i) => {
                                                    return (
                                                        <p key={i} className="subtitle">{hour.day} {hour.open} - {hour.close}</p>
                                                    )
                                                })
                                            }
                                        </section>
                                    </div>
                                </div>
                                <div className="column">
                                    <img src={italiansub} />
                                </div>
                            </div>
                        </div>
                    </div> :

                    <div className="about">

                        <div className="banner-wrapper">
                            <div className="image-wrapper">
                                <div className="image">
                                    <div className="content">
                                        <div className="banner">
                                            <div className="inner-banner">
                                                <img src={logo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="columns">
                                <div className="intro-wrapper column">
                                    <section className="intro">
                                        <p>We put the "deli" in</p>
                                        <p>"delicious"! Come</p>
                                        <p>visit The Deli Station!</p>
                                    </section>
        
                                    <div className="columns">
                                        <section className="column address">
                                            <p className="subtitle">Location:</p>
                                            <p className="subtitle">Downtown Santa Ana</p>
                                            <p className="subtitle">201 East 4th St</p>
                                            <p className="subtitle">Santa Ana, CA 92701</p>
                                        </section>
        
        
                                        <section className="column hours">
                                            <p className="subtitle">Hours:</p>
                                            {
                                                hoursArr.map((hour, i) => {
                                                    return (
                                                        <p key={i} className="subtitle">{hour.day} {hour.open} - {hour.close}</p>
                                                    )
                                                })
                                            }
                                        </section>
                                    </div>
                                </div>
                                <div className="column">
                                    <img src={italiansub} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}