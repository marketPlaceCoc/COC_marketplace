import React, { useState, useEffect } from 'react';
import Sale_Tile from "./Sale_tile";


export default function SaleTiles(props) {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/get_data'); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log('Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display loader while fetching data
  }

  return (
    <div id="Saletiles">
      {data.map((element, index) => (
        <Sale_Tile element={element}/>
      ))}
    </div>
  );
  // const item = [
  //   {
  //     description:"test",
  //     image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
  //     image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
  //     price:"75",
  //     title:"test"
  //   },
  //   {
  //     description:"test",
  //     image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
  //     image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
  //     price:"75",
  //     title:"test"
  //   },
  //   {
  //     description:"test",
  //     image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
  //     image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
  //     price:"75",
  //     title:"test"
  //   },
  //   {
  //     description:"test",
  //     image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
  //     image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
  //     price:"75",
  //     title:"test"
  //   },
  //   {
  //     description:"test",
  //     image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
  //     image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
  //     price:"75",
  //     title:"test"
  //   },
  //   {
  //     description:"test",
  //     image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
  //     image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
  //     price:"75",
  //     title:"test"
  //   },
  //   {
  //     description:"test",
  //     image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
  //     image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
  //     price:"75",
  //     title:"test"
  //   },
  //   {
  //     description:"test",
  //     image2:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/base_img.jpg",
  //     image1:"https://storage.googleapis.com/cocmarketplace-6de0e.appspot.com/th14_acc.jpg",
  //     price:"75",
  //     title:"test"
  //   },
  // ]

  
}
