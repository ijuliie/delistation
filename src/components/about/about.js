import React from "react"
import hoursArr from "../hours"
import logo from "../../assets/white-logo-drop-shadow.png"
import { Columns } from "react-bulma-components"
import { useMediaQuery } from "react-responsive"
import "./about.scss"

export default function About(){
    const isTablet = useMediaQuery({query: "(min-width:768px)"}) 

    return (
        <>
            {
                isTablet ?
                    <div id="about" className="about">
                        
                        <div className="row">
                            <Columns>
                                <Columns.Column className="intro-wrapper">
                                    <section className="intro">
                                        <p>We put the "deli" in</p>
                                        <p>"delicious"! Come</p>
                                        <p>visit The Deli Station!</p>
                                    </section>

                                    <Columns className="is-mobile">
                                        <Columns.Column className="column address">
                                            <p className="subtitle">Location:</p>
                                            <p className="subtitle">Downtown Santa Ana</p>
                                            <p className="subtitle">201 East 4th St</p>
                                            <p className="subtitle">Santa Ana, CA 92701</p>
                                        </Columns.Column>


                                        <Columns.Column className="hours">
                                            <p className="subtitle">Hours:</p>
                                            {
                                                hoursArr.map((hour, i) => {
                                                    return (
                                                        <p key={i} className="subtitle">{hour.day} {hour.open} - {hour.close}</p>
                                                    )
                                                })
                                            }
                                        </Columns.Column>
                                    </Columns>
                                </Columns.Column>
                                <Columns.Column className="italiansub">
                                    <div><img alt="logo" src={logo} /></div>
                                </Columns.Column>
                            </Columns>
                        </div>
                    </div> :

                    <div className="about">
                        
                        <div className="row">
                            <Columns>
                                <Columns.Column className="intro-wrapper">
                                    <section className="intro">
                                        <p>We put the "deli" in</p>
                                        <p>"delicious"! Come</p>
                                        <p>visit The Deli Station!</p>
                                    </section>
        
                                    <Columns>
                                        <Columns.Column className="address">
                                            <p className="subtitle">Location:</p>
                                            <p className="subtitle">Downtown Santa Ana</p>
                                            <p className="subtitle">201 East 4th St</p>
                                            <p className="subtitle">Santa Ana, CA 92701</p>
                                        </Columns.Column>
        
        
                                        <Columns.Column className="hours">
                                            <p className="subtitle">Hours:</p>
                                            {
                                                hoursArr.map((hour, i) => {
                                                    return (
                                                        <p key={i} className="subtitle">{hour.day} {hour.open} - {hour.close}</p>
                                                    )
                                                })
                                            }
                                        </Columns.Column>
                                    </Columns>
                                </Columns.Column>
                                <Columns.Column className="italiansub">
                                    <div><img alt="logo" src={logo} /></div>
                                </Columns.Column>
                            </Columns>
                        </div>
                    </div>
            }
        </>
    )
}