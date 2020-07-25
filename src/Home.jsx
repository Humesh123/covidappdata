import React, { useState, useEffect } from "react";
import {FetchIndiadata} from "./api";
import IndiaCards from "./IndiaCards";
import StatePicker from "./StatePicker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import axios from "axios";
import Sdata from "./States";
import DistictPicker from "./DistictPicker";
import Statedata from "./Statedata";
import IndChart from "./IndChart";


const Home=()=>{

const [InData,setInData]=useState();
const [SData,setSData]=useState();
const [DisName,setDisName]=useState();
useEffect(()=>{


    async function getInData(){
        const Idata=await FetchIndiadata();
        setInData(Idata);
    }


        getInData();

    

},[]);



async function getStateData(state){
    const Statedata=await axios.get("https://api.covidindiatracker.com/state_data.json");
   
    
    // const stateMap = Statedata.data.map((s)=>{return s.state});
    console.log(Statedata.data);
    

    let STATEData = Statedata.data.filter((s) =>  s.state == `${state}`);
   
    setSData(STATEData);
    
    
}




const handleStatechange = (state) =>{
    getStateData(state);
    setDisName(state);

   }
   console.log(DisName);

    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                   <StatePicker handleStatechange={handleStatechange}/> 
                    
                   {
                        
                    SData ? ( SData.length==1 ? <IndiaCards data={SData}/> : <IndiaCards data={InData}/> ) : <IndiaCards data={InData}/>


                    }


            <div className="row">
                <div className="col-md-7 col-12">
                  {DisName ? <DistictPicker data={DisName}/> : <Statedata/>}
                </div>
                <div className="col-md-5 col-12" >
                  { SData ? ( SData.length==1 ? <IndChart data={SData} name={DisName}/> : <IndChart data={InData}/> ) : <IndChart data={InData}/>}
                </div>
            </div>


                    </div>
                </div>
            </div>
        </>
    )




    
}

export default Home;