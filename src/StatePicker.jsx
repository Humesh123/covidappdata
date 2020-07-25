import React, {useState,useEffect} from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import Sdata from "./States"


const StatePicker = (props) =>{


    const StateData = Sdata.map((state)=> state.name);
    //const StateData = (props.data);


    const InputEvent=(e)=>{
        
        props.handleStatechange(e.target.value);
    }


    return (

        <>
        <FormControl>
            <NativeSelect defaultValue="" onChange={InputEvent}>
                <option value="global">select State</option>

                {StateData.map((state,i) =>{
                    return <option key={i}>{state}</option>;
                })}
            </NativeSelect>
        </FormControl>
         
        </>
    )
}

export default StatePicker;