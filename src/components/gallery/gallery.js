import React from "react"
import { Columns } from "react-bulma-components"
import NavigationBar from "../navigationbar"
import brisketFries from "../../assets/bbqbrisketfries.png"
import californiaTurkey from "../../assets/californiaturkeyclub.png"
import chickenPesto from "../../assets/chickenpesto.png"
import bbqBrisketSausage from "../../assets/bbqbrisketsausage.png"
import cuban from "../../assets/cuban.png"
import cuban2 from "../../assets/cuban2.jpg"
import italianSub from "../../assets/italian-sub.png"
import holidayTurkeyBulk from "../../assets/holidayturkeybulk.png"

export default function Gallery() {
    return (
        <>
        <NavigationBar />
        <Columns className="is-gapless">
            <Columns.Column>
                <div><img src={californiaTurkey} /></div>
            </Columns.Column>
            <Columns.Column style={{"lineHeight":"0"}}>
                <div><img src={brisketFries} /></div>
                <div><img src={cuban2} /></div>
                <div><img src={chickenPesto} /></div>
            </Columns.Column>
            <Columns.Column style={{"lineHeight":"0"}}>
                <div><img src={holidayTurkeyBulk} /></div>
                <div><img src={italianSub} /></div>
            </Columns.Column>
        </Columns>
        </>
    )
}