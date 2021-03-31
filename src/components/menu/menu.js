import React from "react"
import { Columns, Box, Notification, Card } from "react-bulma-components"
import breakfastArr from "./breakfast"
import coldSandwichesArr from "./coldsandwiches"
import hotSandwichesArr from "./hotsandwiches"
import saladArr from "./salads"
import friesArr from "./fries"


export default function Menu(){
    const breakfast = breakfastArr.map((breakfast, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{breakfast.item}</p>
                <Card.Content>{breakfast.ingredients} <span className="has-text-weight-bold">${breakfast.price}</span></Card.Content>
            </div>
        )
    })

    const coldSandwiches = coldSandwichesArr.map((sandwich, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{sandwich.item}</p>
                <Card.Content>{sandwich.ingredients} <span className="has-text-weight-bold">${sandwich.price}</span></Card.Content>
            </div>
        )
    })

    const hotSandwiches = hotSandwichesArr.map((sandwich, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{sandwich.item}</p>
                <Card.Content>{sandwich.ingredients} <span className="has-text-weight-bold">${sandwich.price}</span></Card.Content>
            </div>
        )
    })

    const salads = saladArr.map((salad, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{salad.item}</p>
                <Card.Content>{salad.ingredients} <span className="has-text-weight-bold">${salad.price}</span></Card.Content>
            </div>
        )
    })

    const fries = friesArr.map((fries, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{fries.item}</p>
                <Card.Content>{fries.ingredients} <span className="has-text-weight-bold">${fries.price}</span></Card.Content>
            </div>
        )
    })

    return (
        <div id="menu" className="menu">

            <h1 className="title has-text-centered">Our Menu</h1>
            <Box>   
                <div className="row">
                    <Columns>
                        <Columns.Column className="breakfast">

                            <Notification className="is-size-7">
                                <div className="message-header">BREAKFAST (served until 11 am)</div>
                                    {breakfast}
                            </Notification>

                        </Columns.Column>

                        <Columns.Column className="column cold-sandwiches">
                            <Notification className="is-size-7">
                                <div className="message-header">COLD SANDWICHES (includes 4oz side deli salad)</div>
                                {coldSandwiches}
                            </Notification>
                        </Columns.Column>
                    </Columns>
                </div>


                <div className="row">
                    <Columns>
                        <Columns.Column className="hot-sandwiches">
                            <Notification className="is-size-7">
                                <div className="message-header">HOT SANDWICHES (includes 4oz side deli salad)</div>
                                {hotSandwiches}
                            </Notification>
                        </Columns.Column>
                        
                        
                        <Columns.Column className="salads">
                            <Notification className="is-size-7">
                                <div className="message-header">SALADS/WRAPS & SOUPS</div>
                                {salads}
                            </Notification>

                            <div className="fries">
                                <Notification className="is-size-7">
                                    <div className="message-header">4TH STREET MARKET FRIES</div>
                                    {fries}
                                </Notification>
                            </div>

                            <div className="specials">
                                <Notification className="is-size-7">
                                    <div className="message-header">SPECIALS</div>
                                    <div className="subtitle">Half A Cold Sandwich w/ Chicken Noodle Soup & Soda <span>$8.50</span></div>
                                    <div className="subtitle">Half A Cold Sandwich w/ Deli Salad & Soda <span>$7.25</span></div>
                                </Notification>
                            </div>

                            <div className="kids">
                                <Notification className="is-size-7">
                                    <div className="message-header">KID'S MENU</div>
                                    <div className="subtitle">Grilled Cheese w/ Fries <span>$6.50</span></div>
                                    <div>
                                    <div className="subtitle">Grilled Ham & Cheese Sandwich <span>$5.50</span></div>
                                    </div>
                                </Notification>
                            </div>

                        </Columns.Column>

                    </Columns>
                </div>
            </Box>
        </div>
    )
}