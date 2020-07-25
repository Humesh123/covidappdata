import React, { useState,useEffect } from "react";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";
import CountryPicker from "./CountryPicker/CountryPicker";
import Fetchdata from "./api";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



 const Main = () =>{

  const [cardData, setCardData]=useState();
  const [CountryData, setCountryData]=useState("");
  
  useEffect(()=>{
  async function GetData(){
        const Cdata = await Fetchdata();
        setCardData(Cdata);
    
    }
    GetData();
  
},[]);

 const handleCountrychange =async (country)=>{
    const Cdata = await Fetchdata(country);
    setCardData(Cdata);
    setCountryData(country);
    
}


    return (
     

        <>
       
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
        <h1 ><CountryPicker handleCountrychange={handleCountrychange} /></h1>
        
        <Cards data={cardData} />
        
        { cardData ?( <Charts data={cardData} country={CountryData}/>):null
        }

        </div>
        </div>
        </div>
        </>
    )
}

export default Main;