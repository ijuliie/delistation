import React from "react"
import { Box, Image, Tile } from "react-bulma-components"
import NavigationBar from "../navigationbar"
import brisketFries from "../../assets/bbqbrisketfries.png"
import californiaTurkey from "../../assets/californiaturkeyclub.png"
import chickenPesto from "../../assets/chickenpesto.png"
import bbqBrisketSausage from "../../assets/bbqbrisketsausage.png"
import cuban from "../../assets/cuban.png"
import cuban2 from "../../assets/cuban2.png"
import philly from "../../assets/phillycheese.png"
import italianSub from "../../assets/italian-sub.png"
import turkey from "../../assets/turkey.png"
import holidayTurkeys from "../../assets/holidayturkeys.png"
import sliders from "../../assets/sliders.png"
import "./gallery.css"

export default function Gallery() {
    return (
        <>
        <NavigationBar />
        <Box>
            <Tile kind="ancestor">
                <Tile size={8} vertical>
                    <Tile>
                        <Tile kind="parent" vertical>
                            <Tile vertical>
                                <Image src={ californiaTurkey } alt="californa-turkey" />
                                <Image src={ brisketFries } alt="brisket-fries" />
                                <Image src={ philly } alt="phillycheese" />
                                <Image src={ holidayTurkeys } alt="holiday-turkeys" />
                            </Tile>
                        </Tile>

                        <Tile kind="parent">
                            <Tile renderAs="article" kind="child">
                                <Image src={ sliders } alt="sliders" />
                                <Image src={ chickenPesto } alt="pesto" />
                            </Tile>
                        </Tile>
                    </Tile>
                </Tile>

                <Tile vertical>
                    <Tile kind="parent" vertical>
                        <Tile renderAs="article" kind="child">
                            <Image src={ italianSub } alt="italian-sub" />
                            <Image src={ cuban2 } alt="cuban" />
                            <Image src={ turkey } alt="turkey" />
                            <Image src={ cuban } alt="cuban" />
                        </Tile>
                    </Tile>
                </Tile>
            </Tile>
        </Box>
        </>
    )
}