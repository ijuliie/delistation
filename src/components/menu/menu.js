import React from "react"
import { Columns, Box, Notification, Card } from "react-bulma-components"
import breakfastArr from "./breakfast"
import coldSandwichesArr from "./coldsandwiches"
import hotSandwichesArr from "./hotsandwiches"
import saladArr from "./salads"
import friesArr from "./fries"


export default function Menu() {
    const breakfast = breakfastArr.map((breakfast, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{breakfast.item}</p>
                <Card.Content>{breakfast.ingredients}</Card.Content>
            </div>
        )
    })

    const coldSandwiches = coldSandwichesArr.map((sandwich, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{sandwich.item}</p>
                <Card.Content>{sandwich.ingredients}</Card.Content>
            </div>
        )
    })

    const hotSandwiches = hotSandwichesArr.map((sandwich, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{sandwich.item}</p>
                <Card.Content>{sandwich.ingredients}</Card.Content>
            </div>
        )
    })

    const salads = saladArr.map((salad, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{salad.item}</p>
                <Card.Content>{salad.ingredients}</Card.Content>
            </div>
        )
    })

    const fries = friesArr.map((fries, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{fries.item}</p>
                <Card.Content>{fries.ingredients}</Card.Content>
            </div>
        )
    })

    return (
        <div id="menu" className="menu">
            <h1 className="title has-text-centered">Our Menu</h1>
            <Box>
                <Columns>
                    <Columns.Column>
                        <Notification className="is-size-7">
                            <div className="message-header">BREAKFAST</div>
                            {breakfast}
                        </Notification>

                        <Notification className="is-size-7">
                            <div className="message-header">HOT SANDWICHES (includes 4oz side deli salad)</div>
                            {hotSandwiches}
                        </Notification>
                    </Columns.Column>

                    <Columns.Column>
                        <Notification className="is-size-7">
                            <div className="message-header">COLD SANDWICHES (includes 4oz side deli salad)</div>
                            {coldSandwiches}
                        </Notification>

                        <Notification className="is-size-7">
                            <div className="message-header">SALADS/WRAPS</div>
                            {salads}
                        </Notification>

                        <div className="fries">
                            <Notification className="is-size-7">
                                <div className="message-header">4TH STREET MARKET FRIES</div>
                                {fries}
                            </Notification>
                        </div>

                        <div className="kids">
                            <Notification className="is-size-7">
                                <div className="message-header">KID'S MENU</div>
                                <div className="subtitle">Grilled Ham & Cheese Sandwich</div>
                                <div className="subtitle">Grilled Cheese w/ Fries</div>
                            </Notification>
                        </div>
                    </Columns.Column>
                </Columns>
            </Box>
        </div>
    )
}