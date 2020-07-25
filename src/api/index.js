import React from "react"
import axios from "axios"

const url ="https://covid19.mathdro.id/api";
const ChartUrl = "https://covid19.mathdro.id/api/daily"

export const Fetchdata = async (country) => {
    let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
    
    try {
        const response =await axios(changeableUrl);
        const data = response.data;
        const modifiedData = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }
        return modifiedData;
        
    } catch (error) {
        
    }
}


 const FetchIndiadata = async () => {
 
  try {
      const response =await axios("https://api.covidindiatracker.com/total.json");
      // const data = response.data;
      // const modifiedData = {
      //     confirmed:data.confirmed,
      //     recovered:data.recovered,
      //     deaths:data.deaths,
      //     lastUpdate:data.lastUpdate
      // }
      return response;
      
  } catch (error) {
      
  }
}




export default Fetchdata;
export {FetchIndiadata};