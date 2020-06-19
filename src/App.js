import React from 'react'
import Header from "./components/header/header"
import About from "./components/about/about"
import Menu from "./components/menu/menu"
import { Route, Switch } from "react-router-dom"
import "react-bulma-components/dist/react-bulma-components.min.css"
import "./styles.scss"
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
        <About />
        <Menu />
    </div>
  );
}

export default App