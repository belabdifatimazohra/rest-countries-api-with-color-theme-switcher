import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Create your service using a base URL and expected endpoints
export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => `all/`
    }),
    getCountryByName: builder.query({
      query: (name) => `name/${name}`
    })
  })
});


export const  {useGetCountriesQuery, useGetCountryByNameQuery} = countryApi;