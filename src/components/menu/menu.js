import React from "react"
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
                <p className="card-content">{breakfast.ingredients} <span className="has-text-weight-bold">${breakfast.price}</span></p>
            </div>
        )
    })

    const coldSandwiches = coldSandwichesArr.map((sandwich, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{sandwich.item}</p>
                <p className="card-content">{sandwich.ingredients} <span className="has-text-weight-bold">${sandwich.price}</span></p>
            </div>
        )
    })

    const hotSandwiches = hotSandwichesArr.map((sandwich, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{sandwich.item}</p>
                <p className="card-content">{sandwich.ingredients} <span className="has-text-weight-bold">${sandwich.price}</span></p>
            </div>
        )
    })

    const salads = saladArr.map((salad, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{salad.item}</p>
                <p className="card-content">{salad.ingredients} <span className="has-text-weight-bold">${salad.price}</span></p>
            </div>
        )
    })

    const fries = friesArr.map((fries, i) => {
        return (
            <div key={i}>
                <p className="subtitle">{fries.item}</p>
                <p className="card-content">{fries.ingredients} <span className="has-text-weight-bold">${fries.price}</span></p>
            </div>
        )
    })

    return (
        <div id="menu" className="menu">
            <h1 className="title has-text-centered">Menu</h1>

            <div className="row">
                <div className="columns">
                    <div className="column breakfast">

                        <div className="notification is-size-7">
                            <div className="message-header">BREAKFAST (served until 11 am)</div>
                                {breakfast}
                        </div>

                    </div>

                    <div className="column cold-sandwiches">
                        <div className="notification is-size-7">
                            <div className="message-header">COLD SANDWICHES (includes 4oz side deli salad)</div>
                            {coldSandwiches}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="columns">
                    <div className="column hot-sandwiches">
                        <div className="notification is-size-7">
                            <div className="message-header">HOT SANDWICHES (includes 4oz side deli salad)</div>
                            {hotSandwiches}
                            </div>

                        <div className="kids">
                            <div className="notification is-size-7">
                                <div className="message-header">KID'S MENU</div>
                                <div className="subtitle">Grilled Cheese w/ Fries <span>$5.99</span></div>
                                <div>
                                <div className="subtitle">Grilled Ham & Cheese Sandwich <span>$4.99</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="column salads">
                        <div className="notification is-size-7">
                            <div className="message-header">SALADS/WRAPS & SOUPS</div>
                            {salads}
                        </div>

                        <div className="fries">
                            <div className="notification is-size-7">
                                <div className="message-header">4TH STREET MARKET FRIES</div>
                                {fries}
                            </div>
                        </div>

                        <div className="specials">
                            <div className="notification is-size-7">
                                <div className="message-header">SPECIALS</div>
                                <div className="subtitle">Half A Cold Sandwich w/ Chicken Noodle Soup & Soda <span>$8.50</span></div>
                                <div className="subtitle">Half A Cold Sandwich w/ Deli Salad & Soda <span>$7.25</span></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}