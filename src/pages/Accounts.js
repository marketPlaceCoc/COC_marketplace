import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Accounts(props) {
  let all_accounts = {
    title:'title',
    description:'description',
    price:'price',
    image1_url:'image1_url',
    image2_url:'image2_url'
  }
  return (
    <div>
      <Navbar/>

      <Footer/>
    </div>
  )
}
