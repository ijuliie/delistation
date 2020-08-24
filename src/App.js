import React from 'react'
import Gallery from "./components/gallery/gallery"
import Main from "./components/main"
import { Route, Switch } from "react-router-dom"
import "react-bulma-components/dist/react-bulma-components.min.css"
import "./styles.scss"
import './App.css'
import FadeIn from "react-fade-in"

function App() {
  return (
    <FadeIn transitionDuration={800}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/gallery" component={ Gallery } />
        </Switch>
      </div>
    </FadeIn>
  );
}

export default App