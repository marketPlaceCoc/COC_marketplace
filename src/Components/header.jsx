import React from 'react'
import cover from '../assets/cover.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id='header'>
        <img src={cover} alt="" className="cover" />
        <div className="content">
            <h1>
            BUY CLASH OF <br /> CLANS<br /> ACCOUNT<br /> WITH LIFETIME<br /> WARRANTY!
            </h1>
            <br />
            <div className="link">
                <Link to="/FAQs">WHY US</Link>
                <Link to="/FAQs">HOW TO BUY</Link>
            </div>
            <Link to="/FAQs">HOW IT WORKS</Link>
        </div>
    </div>
  )
}
