import React from 'react'

import Nav from './Nav'

export default function Header(props) {
    return (
        <header className="centered">
            <div>
                <h2>{props.siteAuthorName}</h2>
                <h6>Web Designer and Developer :: Kitchener, ON</h6>
            </div>
            <div>
                <Nav />
            </div>
        </header>
    )
}
