import React from 'react'
export default function Navbar({cart, cartCost}) {
  return (
    <div id='Navbar'>
        <div className="nav">
        <div className='first'>
            <a href=""><span><img src='../assets/logo.png' alt="" /></span></a>
            <a href=""><span>Login/Register</span></a>
            <a href=""><span className='acc'>COC Accounts</span></a>
            <a href=""><span>Blogs</span></a>
            <a href=""><span>FAQ</span></a>
        </div>
        <div>
        <a href=""><span>Cart/${cart}</span></a>
        <a href=""><span></span></a>
        </div>
        </div>
        <div className="nav nav2">
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
