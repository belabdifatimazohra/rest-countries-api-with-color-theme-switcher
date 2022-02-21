import React from 'react';
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CountryCard({ srcImg ,country, population, region, capital }) {

    const navigate = useNavigate();

    return (
        
        <div>
        <Card
          style={{
            width: "300px",
            height: "350px",
            margin: "40px",
            position: "relative",
          }}
  
        >
          <Card.Img className="countrieImg" variant="top" src={srcImg} onClick={() =>
            navigate.push(`/countries/${country}`)
          } />
          
          <div className="CardDesc">
              <h3> {country} </h3>
              <h6> Population: <span> {population} </span> </h6> 
              <h6> Region: <span> {region} </span> </h6> 
              <h6> Capital: <span> {capital} </span></h6> 
          </div> 
        </Card>
      </div>
    );
}

export default CountryCard;