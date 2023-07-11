import React, { useState } from 'react'
export default function Navbar({cart, cartCost}) {
  let [th_hover, set_th_hover]= useState(false);

  const handleHover = () => {
    set_th_hover(true);
  };

  const handleMouseLeave = () => {
    set_th_hover(false);
  };
  return (
    <div id='Navbar'>
        <div className="nav">
        <div className='first'>
            <a href="/"><span><img src='../assets/logo.png' alt="" /></span></a>
            <a href="/login"><span>Login/Register</span></a>
            <a href="/Accounts"
            ><span className='acc'
            onMouseOver={handleHover}
            onMouseOut={handleMouseLeave}
            >COC Accounts</span></a>
            <a href="/blog"><span>Blogs</span></a>
            <a href="/FAQs"><span>FAQ</span></a>
        </div>
        <div>
        <a href="/Cart"><span>Cart/${cart}</span></a>
        </div>
        </div>
        <div 
          className="nav nav2" 
          style={{display: th_hover?"block":"none"}}
        >
        <a href=""><span>TOWN HALL 10</span></a>
        <a href=""><span>TOWN HALL 11</span></a>
        <a href=""><span>TOWN HALL 12</span></a>
        <a href=""><span>TOWN HALL 13</span></a>
        <a href=""><span>TOWN HALL 14</span></a>
        <a href=""><span>TOWN HALL 15</span></a>
        </div>
    </div>
  )
}
