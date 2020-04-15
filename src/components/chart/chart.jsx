import React, { useState, useEffect } from 'react';
import { Line, Bar } from "react-chartjs-2";
import style from "./chart.module.css";

import { fetchdailydata } from "../../Api"

const Chart = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailydata, setdailydata] = useState ([]);

    useEffect(() => {
        const fetchApi = async () => {
            setdailydata(await fetchdailydata());
        }
console.log(dailydata);
        fetchApi();
    },[ ]);

    const lineChart = (
        dailydata.length !==0
            ?(<Line

                data={{
                    labels: dailydata.map(({date} )=> date),
                    datasets: [{
                        data:dailydata.map(({confirmed} )=> confirmed),
                        label:'infected',
                        borderColor:"#3333ff",
                        fill:true,
                    },
                    
                    {
                        data:dailydata.map(({deaths} )=> deaths),
                        label:'deaths',
                        borderColor:"red",
                        fill:true,

                    }],
                }}

            />) : null
    )

const barchart =(
    confirmed 
    ?(
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'people',
                backgroundColor:['blue', 'green' ,'red'],
            data:[confirmed.value, recovered.value, deaths.value]
            }],
            
        }}
        options={{
            legend:{display:false},
            title:{display:true,text:`current state in ${country}`},
        }}
        />
    ):null
)
    return  (
    <div className={style.container}>
        {country ? barchart : lineChart}


    </div>
    )
}
export default Chart;