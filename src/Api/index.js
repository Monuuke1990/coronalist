import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async (country) => {
    let changableUrl=url;
    if(country){
        changableUrl=`${url}/countries/${country}`
    }

    try {
        //const response = await axios.get(url);

        //const data = response.data;

        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changableUrl);

        const modifieddata = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifieddata;

    }
    catch (error) {

    }
}

export const fetchdailydata = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const newdata = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate
        }));
        return newdata;
    }
    catch (error) {

    }
}

export const fetchcountries = async () =>{
    try{
        const { data:{countries} } = await axios.get(`${url}/countries`);
return countries.map((country)=> country.name)
    }
    catch (error){

    }
}