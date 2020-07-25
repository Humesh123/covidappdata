import React from "react";
import CountUp from "react-countup"; 

const IndiaCards = (props) =>{
  const InData = props.data;
  
    if(!InData){
        return "Loading...";
    }
    let dayTime = (new Date()).toString().split(' ').splice(1,3).join(' ');

    return (

        <>
       
        {/* {console.log(InData)} */}
          <div className="container-fuid mt-5">
           
            <div className="container-fluid mb-4 p-0">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <div className="row gy-4" >

                         <div className="col-md-3 col-12 mx-auto " >
                                <div className="card" >
                                <div className="card-body">
                                    <h4 className="card-title">Infected</h4>
                                    <h5 className="card-subtitle mb-2" style={{    color: "#373adc"}}>
                                    {Array.isArray(InData) ?  <CountUp start={0} end={InData[0].confirmed} durataion={1.5} separator="," /> 
                                    :<CountUp start={0} end={InData.data.confirmed} durataion={1.5} separator="," />}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{dayTime}</h6>
                                    <p className="card-text">Number of active cases</p>
                                </div>
                                </div>
                         </div>

                         <div className="col-md-3 col-12 mx-auto " >
                                <div className="card" >
                                <div className="card-body">
                                    <h4 className="card-title">Active</h4>
                                    <h5 className="card-subtitle mb-2  text-danger">
                                    {Array.isArray(InData) ?  <CountUp start={0} end={InData[0].active} durataion={1.5} separator="," /> 
                                    :<CountUp start={0} end={InData.data.active} durataion={1.5} separator="," />}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{dayTime}</h6>
                                    <p className="card-text">Number of active cases</p>
                                </div>
                                </div>
                         </div>

                         <div className="col-md-3 col-12 mx-auto " >
                                <div className="card" >
                                <div className="card-body">
                                    <h4 className="card-title">Recovered</h4>
                                    <h5 className="card-subtitle mb-2 text-success">
                                    {Array.isArray(InData) ?  <CountUp start={0} end={InData[0].recovered} durataion={1.5} separator="," /> 
                                    :<CountUp start={0} end={InData.data.recovered} durataion={1.5} separator="," />}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{dayTime}</h6>
                                    <p className="card-text">Number of recovered cases</p>
                                </div>
                                </div>
                         </div>

                         <div className="col-md-3 col-12 mx-auto " >
                                <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Deaths</h4>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                    {Array.isArray(InData) ?  <CountUp start={0} end={InData[0].deaths} durataion={1.5} separator="," /> 
                                    :<CountUp start={0} end={InData.data.deaths} durataion={1.5} separator="," />}
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{dayTime}</h6>
                                    <p className="card-text">Number of death cases</p>
                                </div>
                                </div>
                         </div>

                         </div>

                     </div>
                </div>
            </div>

          </div>
        </>
    )
}

export default IndiaCards;