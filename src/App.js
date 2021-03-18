import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.changeBackgroundColour = this.changeBackgroundColour.bind(this)
  
    this.state = {
       pageColour: "webdev",
       siteAuthorName: "Greg Rasmussen"
    }
  }

  changeBackgroundColour = backgroundColour => {
  document.body.classList.remove(this.state.pageColour)
    this.setState({
      pageColour: backgroundColour
  })    
  document.body.classList.add(this.state.pageColour)
  console.log(this.state.pageColour)
  }
  
  
  render() {

    let classes = ['App', 'test', this.state.pageColour]
    return (
      <Router>
        <div className={classes.join(' ')}>
          <Header siteAuthorName={this.state.siteAuthorName} />
          <Main changeBackgroundColour={this.changeBackgroundColour}/>
          <Footer siteAuthorName={this.state.siteAuthorName} />
        </div>
      </Router>
    )
  }
}
