import React, {useState,useEffect} from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import Sdata from "./States"


const DistictPicker = () =>{
    const [StateData,setStateData]=useState();



    useEffect(()=>{
        async function getInData(){
            const Statedata=await axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise");
            setStateData(Statedata.data.data.statewise);
        }
        getInData();
        
    
    },[]);
     

    

    // const InputEvent=(e)=>{
        
    //     props.handleStatechange(e.target.value);
    //     // getInData();
    // }


    return (

        <>
                    <div className="table-responsive">
                       <h4 className=" text-center p-2 " > State Wise Data </h4> 
                       <div className="table-responsive table-shadow">
      
                            <table className=" table table-striped ">
                                <thead className="table-dark">
                                <tr >
                                        <td>State Name</td>
                                        <td>active</td>
                                        <td>confirmed</td>
                                        <td>deceased</td>
                                        <td>recovered</td>
                                    </tr>
                                </thead>


                                <tbody className="table-bordered">
                                    {
                                         
                                        StateData ? StateData.map(function (element,i) {
                                          
                                            return <tr key={i}>
                                            <td title={JSON.stringify(element.state)}>{element.state}</td>
                                            <td>{element.active}</td>
                                            <td>{element.confirmed}</td>
                                            <td>{element.deaths}</td>
                                            <td>{element.recovered}</td>
                                            </tr>;
                                        }) :null
                                    }
                                </tbody>
                               
                            </table>
                     
                            </div>
             


                    </div>
       
    
         
        </> 
    )
}

export default DistictPicker;