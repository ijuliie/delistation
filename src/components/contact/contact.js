import React from "react"
import hoursArr from "../hours"
import { Columns } from "react-bulma-components"
import "./contact.scss"

export default function Contact() {
    return (
        <div id="contact" className="has-text-centered contact">
            <h1 className="title">Contact</h1>
            <Columns>
                <Columns.Column>
                <section className="address">
                    <p className="subtitle">Location:</p>
                    <p className="subtitle">Downtown Santa Ana</p>
                    <p className="subtitle">201 East 4th St</p>
                    <p className="subtitle">Santa Ana, CA 92701</p>
                </section>
                    <p className="subtitle">Follow us</p>
                    <a target="_blank" href="https://www.instagram.com/delistationoc/"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" href="https://www.facebook.com/The-Deli-Station-102311151183067"><i class="fab fa-facebook"></i></a>
                </Columns.Column>

                <Columns.Column>
                    <p className="subtitle">Hours:</p>
                            {
                                hoursArr.map((hour, i) => {
                                    return (
                                        <p key={i} className="subtitle">{hour.day} {hour.open} - {hour.close}</p>
                                    )
                                })
                            }
                </Columns.Column>

                <Columns.Column>
                    <p className="subtitle">We also cater!</p>
                    <p className="subtitle">Call to place an order.</p>
                    <p>(657) 200-8376</p>
                </Columns.Column>
            </Columns>
        </div>
    )
}