import React,{useState} from 'react'

export default function Sale_Tile(props) {

  let element = props.element;
  return (
    <div className="SaleTile">
          <img src={element.image1_url} alt="image1" 
            onMouseOver={e => (e.currentTarget.src = element.image2_url)}
            onMouseOut={e => (e.currentTarget.src = element.image1_url)} 
            />
          <h1>{element.title}</h1>
          <div className="details">
            <p>{element.description}</p>
            <p>
              <span>$</span>
              {element.price}
            </p>
        </div>
    </div>
  )
}
