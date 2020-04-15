import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchcountries } from "../../Api"



const Countryselect = ({handleCountryChange}) => {
    const [fetchedCountries, setfetchcountry] = useState([]);

    useEffect(() => {
        const fetchapi = async () => {
            setfetchcountry(await fetchcountries());
        }
        fetchapi();
    },[setfetchcountry])




    return (<div>
        
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value=" ">global</option>
                {fetchedCountries.map((country ,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>


    </div>)
}
export default Countryselect;