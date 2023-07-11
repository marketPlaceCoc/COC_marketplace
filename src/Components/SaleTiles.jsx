import React ,{useState}from "react";
import Sale_Tile from "./Sale_tile";
export default function SaleTiles(props) {

  const item = [
    {
      description:"test",
      image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
      image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
      price:"75",
      title:"test"
    },
    {
      description:"test",
      image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
      image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
      price:"75",
      title:"test"
    },
    {
      description:"test",
      image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
      image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
      price:"75",
      title:"test"
    },
    {
      description:"test",
      image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
      image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
      price:"75",
      title:"test"
    },
    {
      description:"test",
      image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
      image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
      price:"75",
      title:"test"
    },
    {
      description:"test",
      image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
      image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
      price:"75",
      title:"test"
    },
    {
      description:"test",
      image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
      image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
      price:"75",
      title:"test"
    },
    {
      description:"test",
      image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
      image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
      price:"75",
      title:"test"
    },
  ]

  return (
    <div id="Saletiles">
      {item.map((element, index) => (
        <Sale_Tile element={element}/>
      ))}
    </div>
  );
}
