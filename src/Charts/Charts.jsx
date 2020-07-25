import React, { useState, useEffect } from "react";
import axios from "axios";
import {Line,Bar} from "react-chartjs-2";
import FetchChartdata from "../api";


const Charts = (props) =>{

    
   
    
const [dailyData,setDailyData]=useState([]);

// let dailyData = [];

useEffect(()=>{
    async function GetData(){
        const res = await axios.get(`https://covid19.mathdro.id/api/daily`);
        
        const modifiedData = res.data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        // console.log(modifiedData);
        setDailyData(modifiedData);
    
    }

  GetData();
    
},[]);

    const LineChart=(

        dailyData.length !=0 ? ( <Line
                                data={{
                                    labels:dailyData.map(({date})=>date),
                                    datasets:[{
                                        data:dailyData.map(({confirmed})=>confirmed),
                                        label:"Infected",
                                        borderColor:"#28a745",
                                        fill:true,
                                    } , {
                                        data:dailyData.map(({deaths})=>deaths),
                                        label:"Deaths",
                                        borderColor:"#dc3545",
                                        backgroundColor:"#f76869",
                                        fill:true,
                                    } ],
                                }}
                                />  ): null
                    );


                    
                    // console.log(props.country);
                    const barChart = (
                        (
                          <Bar
                            data={{
                              labels: ['Infected', 'Recovered', 'Deaths'],
                              datasets: [
                                {
                                  label: 'People',
                                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                  data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value],
                                },
                              ],
                            }}
                            options={{
                              legend: { display: false },
                              title: { display: true, text: `Current state in ${props.country}` },
                            }}
                          />
                        ) 
                      );


    return (

        <>
        <div className="container" style={{display:"flex",justifyContent:"center"}}>
            <div className="chart">
            {/* {LineChart} */}
            {  props.data ? ( props.country ? barChart : LineChart):`...Loading`}
            </div>
        </div>
        </>
    )
}

export default Charts;