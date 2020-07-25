import React, {useState,useEffect} from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";


const CountryPicker = (props) =>{

const [countryData,setCountryData]=useState([]);


    



  useEffect(()=>{
    async function GetData(){
        const res = await axios.get(`https://covid19.mathdro.id/api/countries`);
        
        const modifiedData = res.data.countries.map((country)=> country.name);
        // console.log(modifiedData);
        setCountryData(modifiedData);
    
    }

  GetData();
    
},[]);





const InputEvent=(e)=>{
    
    props.handleCountrychange(e.target.value);
}


    return (

        <>
        <FormControl>
            <NativeSelect defaultValue="" onChange={InputEvent}>
                <option value="global">Global</option>

                {countryData.map((country,i) =>{
                    return <option key={i}>{country}</option>;
                })}
            </NativeSelect>
        </FormControl>
         
        </>
    )
}

export default CountryPicker;