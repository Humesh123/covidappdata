import React, { useState, useEffect } from "react";
import {Line,Bar} from "react-chartjs-2";


const Charts = (props) =>{

    



                   const barChart = (
                    props.data ?   (
                            Array.isArray(props.data) ? <Bar
                            data={{
                              labels: ['Infected', 'Recovered', 'Deaths'],
                              datasets: [
                                {
                                  label: 'People',
                                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                  data: [props.data[0].confirmed, props.data[0].recovered, props.data[0].deaths],
                                },
                              ],
                            }}
                            options={{
                              legend: { display: false },
                              title: { display: true, text: `` },
                            }}
                          /> : <Bar
                            data={{
                              labels: ['Infected', 'Recovered', 'Deaths'],
                              datasets: [
                                {
                                  label: 'People',
                                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                  data: [props.data.data.confirmed, props.data.data.recovered, props.data.data.deaths],
                                },
                              ],
                            }}
                            options={{
                              legend: { display: false },
                              title: { display: true, text: ` ` },
                            }}
                          />  
                        ) : null 
                      )


    return (

        <>
        <h4 className=" text-center p-2 heading-chart" > {props.name ? `${props.name}  covid cases` : "India covid cases"}</h4>
        <div style={{display:"flex",justifyContent:"center",height:"100%",alignItems:"center"}}>
            <div className="chart" style={{display:"flex",justifyContent:"center",height:"100%",alignItems:"center",width:"100%"}}>
            {/* {LineChart} */}
            {barChart}
            </div>
        </div>
        </>
    )
}

export default Charts;