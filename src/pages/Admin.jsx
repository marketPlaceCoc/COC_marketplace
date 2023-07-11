import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Admin() {



  return (
    <div id='admin'>
        <form className="content">
            <h1>Add item</h1>
            <input type="file" name="image1" id="" />
            <input type="file" name="image2" id="" />
            <input type="file" name="image3" id="" />
            <input type="text" placeholder='name' />
            <input type="text" placeholder='description' />
            <input type="text" placeholder='price' />
            <button type="submit"></button>
        </form>
    </div>
  )
}
