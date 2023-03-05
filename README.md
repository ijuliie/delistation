## The Deli Station
https://thedelistation.com/

### Motivation
My friend opened a new restaurant and asked me to make a website for his menu.

### Tech/Framework
**Built with:**

- Figma
- ReactJS
- Bulma

### Code Snippets
This was probably the most time consuming part of the website and something that I am very proud of. I spent a lot of time trying to figure out Bulma's CSS library. I implemented the Tile component, which organizes each section for you, to put the restaurant gallery together. I'm very happy with how the gallery component came out.

```
<Box style={{"margin": "1.5rem"}}>
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
                        <Image src={ bbqBrisketSausage } alt="brisket-sausage" />
                    </Tile>
                </Tile>
            </Tile>
        </Tile>

        <Tile vertical>
            <Tile kind="parent" vertical>
                <Tile renderAs="article" kind="child">
                    <Image src={ italianSub } alt="italian-sub" />
                    <Image src={ cuban2 } alt="cuban" />
                    <Image src={ holidayTurkey } alt="holiday-turkey" />
                    <Image src={ turkey } alt="turkey" />
                    <Image src={ cuban } alt="cuban" />
                </Tile>
            </Tile>
        </Tile>
    </Tile>
</Box>
```

### Deployment
I used netlify to deploy my live website.
