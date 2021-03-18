import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
    return (
        <nav>
          <ul>
            <li><a href="https://gregrasmussen.com/projects">Projects</a></li>    
            <li><Link to="aboutme">about me</Link></li>    
            <li><Link to="hireme">hire me!</Link></li>    
          </ul>  
        </nav>
    )
}
