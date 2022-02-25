import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const countrySlice = createSlice({
    name: "country",
    initialState: {
        value: {},
    },
    reducers: {
        filterCountry: (state) => {

            const getCountriesData = async () => {
                const response = await axios.get(`https://restcountries.com/v3.1/all`);
                return response.data
            };
            console.log(getCountriesData());
            state.value = getCountriesData()
        },


    },
});

// Action creators are generated for each case reducer function
export const { filterCountry, searchByCountry } = countrySlice.actions;

export default countrySlice.reducer;
