import React, {useState,useEffect} from "react";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from "axios";
import Sdata from "./States"


const DistictPicker = (props) =>{
    const [item,setItem] = useState("");
    const [DiscData,setDiscData]=useState([]);
    const name =props.data;


    useEffect(()=>{
        async function getInData(){
            const Ddata=await axios.get("https://api.covid19india.org/state_district_wise.json");
            
            
             setDiscData(Ddata.data[name].districtData)
        
         
        }
        getInData();
        
    
    },[name]);
     

   

const ItemSearch = (event) => {
    let data=event.target.value;
    setItem(data);

    const allowed = [`${data}`];

const filtered = Object.keys(DiscData)
  .filter(key => allowed.includes(key))
  .reduce((obj, key) => {
    obj[key] = DiscData[key];
    return obj;
  }, {});

  console.log(filtered);
//   setDiscData(filtered);


}



    return (

        <>
      
                            <div className="table-responsive">
                    
                       <h4 className=" text-center p-2 " > {name ? `${name} District covid cases` : "State Wise Data"}</h4> 
                      
                       <div className="table-responsive table-shadow">
                            <table className=" table table-striped ">
                                <thead className="table-dark">
                                <tr >
                                        <td>District Name</td>
                                        <td>active</td>
                                        <td>confirmed</td>
                                        <td>deceased</td>
                                        <td>recovered</td>
                                    </tr>
                                </thead>


                                <tbody className="table-bordered">
                                    {
                                         
                                        DiscData ? Object.keys(DiscData).map(function (element,i) {
                                            let value = DiscData[element];
                                            
                                            return <tr key={i}>
                                            <td title={JSON.stringify(element)}>{element}</td>
                                            <td >{value["active"]}</td>
                                            <td >{value["confirmed"]}</td>
                                            <td>{value["deceased"]}</td>
                                            <td>{value["recovered"]}</td>
                                            </tr>;
                                        }) :null
                                    }
                                </tbody>
                                {/* <tbody>
                               
                                        {
                                            
                                            Object.keys(DiscData).forEach(key => {
                                                    let value = DiscData[key];
                                                    console.log(key);
                                                    
                                                   
                                                    return  <><tr key={key}>
                                                            <td>{key}</td>
                                                            <td>{value.active}</td>
                                                            <td>{value.confirmed}</td>
                                                            <td>{value.deceased}</td>
                                                            <td>{value.recovered}</td>
                                                        </tr></>
                                                   
                                                

                                                    })
                                        

                                        }
                                       
                                    
                                </tbody> */}
                            </table>
                     
                    
                        </div>

                    </div>

       
    
         
        </> 
    )
}

export default DistictPicker;