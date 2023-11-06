import React from 'react';
import Data from "../../data.json"
const highestPopulationCity = Data.reduce((prevCity, currentCity) => {




    return parseInt(currentCity.population) < parseInt(prevCity.population) ? currentCity : prevCity;
}, Data[0]);
  

 const  CityTable =()=> {
  return (
     <>

          <p>City : {highestPopulationCity.city}</p>
          <p>State : {highestPopulationCity.state_name }</p>
          <p>Population : {highestPopulationCity.population }</p>

      
     </>
  )
}

export default CityTable