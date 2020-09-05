import React from "react"
import hoursArr from "../hours"
import { Box, Columns } from "react-bulma-components"
import "./contact.scss"

export default function Contact() {
    return (
        <div id="contact" className="contact">
            <h1 className="title has-text-centered">Contact</h1>
            <Box>
                <Columns>
                    <Columns.Column>
                    <section className="address">
                        <p className="subtitle">Location:</p>
                        <p className="is-uppercase">Downtown Santa Ana</p>
                        <p className="is-uppercase">201 East 4th St</p>
                        <p className="is-uppercase">Santa Ana, CA 92701</p>
                    </section>
                    </Columns.Column>

                    <Columns.Column>
                        <section className="hours">
                            <p className="subtitle">Hours:</p>
                                    {
                                        hoursArr.map((hour, i) => {
                                            return (
                                                <p key={i} className="is-uppercase">{hour.day} {hour.open} - {hour.close}</p>
                                            )
                                        })
                                    }
                        </section>
                    </Columns.Column>

                    <Columns.Column>
                        <section className="phone">
                            <p className="subtitle">We also cater!</p>
                            <p className="is-uppercase">Call to place an order.</p>
                            <p>(657) 366-8339</p>
                        </section>
                    </Columns.Column>

                    <Columns.Column>
                        <section className="social-media">
                            <p className="subtitle">Follow us</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/delistationoc/"><i className="fab fa-instagram"></i> </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/The-Deli-Station-102311151183067"><i className="fab fa-facebook"></i></a>
                        </section>
                    </Columns.Column>
                </Columns>
            </Box>
        </div>
    )
}