import React ,{ useState, useEffect } from "react";
import {fetchDailyData} from '../../api';
import { Line , Bar} from 'react-chartjs-2';

import styles from './Charts.module.css';



const Charts = ( data) => {

    const [dailyData, setDailyData] = useState([]);
    
    useEffect (() => {
        const fetchAPI  = async () => {
            setDailyData(await fetchDailyData())
        }
    
        fetchAPI();
    },[])

  const Data = data.data
    const barChart = (
      Data.confirmed ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [Data.confirmed, Data.recovered, Data.deaths],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${data.state}` },
          }}
        />
      ) : null
    );

    const lineChart = (
        dailyData.length ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.dailyconfirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: dailyData.map((data) => data.dailydeceased),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },{
                data: dailyData.map((data) => data.dailyrecovered),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              }
              ],
            }}
          />
        ) : null
      );
 console.log(data.state);
 
    
    if(data.state === "Total"){
       const chart = lineChart
       return (
        <div className={styles.container}>
              {chart}
        </div>
    )
    }else{
      const chart = barChart
      return (
        <div className={styles.container}>
              {chart}
        </div>
    )
    }
   
}

export default Charts;