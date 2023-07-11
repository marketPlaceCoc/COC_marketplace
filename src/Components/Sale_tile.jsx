import React,{useState} from 'react'

export default function Sale_Tile(props) {

  let element = props.element;
  return (
    <div className="SaleTile">
          <img src={element.image1} alt="image1" 
            onMouseOver={e => (e.currentTarget.src = element.image2)}
            onMouseOut={e => (e.currentTarget.src = element.image1)} 
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
