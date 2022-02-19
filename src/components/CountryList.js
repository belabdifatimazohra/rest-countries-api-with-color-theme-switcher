import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import axios from "axios";

function CountryList(props) {
    // Movie Data state
    const [countryData, setcountryData] = useState();
    // Get the data movie with axios
    const getCountriesData = async () => {
    const response = await axios.get(
        `https://restcountries.com/v3.1/all`
    );
        // Update the state of data movie
        setcountryData(response.data);
        console.log(response.data);
    };
    // Load Searched movie with component
    useEffect(() => {
        getCountriesData();
    }, []);

    return (
        <div className="countriesList">
            {countryData && countryData.map(country => (
                
                <CountryCard 
                    srcImg = {country.flags.png}
                    country = {country.name.official}
                    population = {country.population}
                    region = {country.region}
                    capital = {country.capital}
                    key = {country.name.official}
                />
            ))}
        </div>
    );
}

export default CountryList;