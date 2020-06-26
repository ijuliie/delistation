import React from 'react'
import Gallery from "./components/gallery/gallery"
import Header from "./components/header/header"
import NavigationBar from "./components/navigationbar"
import Main from "./components/main"
import { Route, Switch } from "react-router-dom"
import "react-bulma-components/dist/react-bulma-components.min.css"
import "./styles.scss"
import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/gallery" component={ Gallery } />
      </Switch>
    </div>
  );
}

export default App