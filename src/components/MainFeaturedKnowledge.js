import React from 'react'

export default function MainFeaturedKnowledge(props) {
    return (
        <section className="featured-knowledge">
            <div>{props.skill1}</div>
            <div>{props.skill2}</div>
            <div>{props.skill3}</div>
        </section>
    )
}
