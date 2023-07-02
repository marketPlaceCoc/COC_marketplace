import React from 'react'
import cover from '../assets/cover.png'

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
                <a href="#">WHY US</a>
                <a href="#">HOW TO BUY</a>
            </div>
            <a href="#">HOW IT WORKS</a>
        </div>
    </div>
  )
}
