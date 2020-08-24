import React from "react"
import { Link } from "react-router-dom"
import { Box, Image, Tile } from "react-bulma-components"
import sloppyBbq from "../../assets/sloppybbq.jpg"
import brisketFries from "../../assets/brisketFries.jpg"
import cuban from "../../assets/IMG_9653.jpg"
import cuban2 from "../../assets/IMG_9650.jpg"
import omelette from "../../assets/omelette.jpg"
import breakfastBurrito from "../../assets/breakfastburrito.jpg"
import breakfastBurrito2 from "../../assets/IMG_9651.jpg"
import westernBurger from "../../assets/westernburger.jpg"
import pastramiColeslow from "../../assets/pastramicoleslaw.jpg"
import caesarWrap from "../../assets/IMG_9647.jpg"
import phillycheese from "../../assets/phillycheesesteak.jpg"
import santaFeWrap from "../../assets/IMG_9654.jpg"
import frenchToast from "../../assets/IMG_9652.jpg"
import frenchToast2 from "../../assets/frenchtoast.jpg"
import italianSub from "../../assets/italiansub.jpg"
import FadeIn from 'react-fade-in';
import Footer from "../footer/footer"

export default function Gallery() {
    return (
        <>
        <p className="back" style={{marginLeft: "1.50rem", paddingTop: "1.50rem"}}><Link style={{color: "#750d37"}} to="/"><i class="fas fa-chevron-circle-left"></i></Link></p>
        <h1 className="gallery title has-text-centered">Gallery</h1>
        <Box style={{"margin": "1.5rem"}}>
            <FadeIn transitionDuration={1000}>
                <Tile kind="ancestor">
                    <Tile size={8} vertical>
                        <Tile>
                            <Tile kind="parent" vertical>
                                <Tile vertical>
                                    <Image src={ cuban } alt="cuban" />
                                    <Image src={ phillycheese } alt="phillycheese" />
                                    <Image src={ pastramiColeslow } alt="pastrami" />
                                    <Image src={ santaFeWrap } alt="wrap" />
                                    <Image src={ italianSub } alt="italian sub" />
                                </Tile>
                            </Tile>

                            <Tile kind="parent">
                                <Tile renderAs="article" kind="child">
                                    <Image src={ frenchToast } alt="french toast" />
                                    <Image src={ omelette } alt="omelette" />
                                    <Image src={ breakfastBurrito } alt="burrito" />
                                    <Image src={ brisketFries } alt="brisket fries" />
                                    <Image src={ cuban2 } alt="cuban" />
                                </Tile>
                            </Tile>
                        </Tile>
                    </Tile>

                    <Tile vertical>
                        <Tile kind="parent" vertical>
                            <Tile renderAs="article" kind="child">
                                <Image src={ breakfastBurrito2 } alt="burrito" />
                                <Image src={ westernBurger } alt="burger" />
                                <Image src={ caesarWrap } alt="wrap" />
                                <Image src={ sloppyBbq } alt="sloppy bbq" />
                                <Image src={ frenchToast2 } alt="french toast" />
                            </Tile>
                        </Tile>
                    </Tile>
                </Tile>
            </FadeIn>
        </Box>
        <Footer />
        </>
    )
}