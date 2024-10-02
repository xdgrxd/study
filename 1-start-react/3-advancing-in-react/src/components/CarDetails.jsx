import React from 'react'

const CarDetails = ({brand, model, color, newCar}) => {
  return (
    <div>
      <h1>Car Details</h1>
      <ul>
        <li>Brand: {brand}</li>
        <li>Color: {color}</li>
        <li>Model: {model}</li>
        {newCar ? (<li>This car is new!</li>) : (<li>This car is used.</li>)}
      </ul>
    </div>
  )
}

export default CarDetails