import React from "react";
import CountUp from "react-countup"; 

const Cards = (props) =>{
   //console.log(props.data)
    if(!props.data){
        return "Loading...";
    }
    return (

        <>
          <div className="container-fuid mt-5">
           
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                        <div className="row gy-4" >

                         <div className="col-md-4 col-12 mx-auto " >
                                <div className="card" >
                                <div className="card-body">
                                    <h4 className="card-title">Infected</h4>
                                    <h5 className="card-subtitle mb-2  text-danger">
                                        <CountUp start={0} end={props.data.confirmed.value} durataion={2.5} separator="," />
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{new Date(props.data.lastUpdate).toDateString()}</h6>
                                    <p className="card-text">Number of active cases</p>
                                </div>
                                </div>
                         </div>

                         <div className="col-md-4 col-12 mx-auto " >
                                <div className="card" >
                                <div className="card-body">
                                    <h4 className="card-title">Recovered</h4>
                                    <h5 className="card-subtitle mb-2 text-success">
                                        <CountUp start={0} end={props.data.recovered.value} durataion={2.5} separator="," />
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{new Date(props.data.lastUpdate).toDateString()}</h6>
                                    <p className="card-text">Number of recovered cases</p>
                                </div>
                                </div>
                         </div>

                         <div className="col-md-4 col-12 mx-auto " >
                                <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Deaths</h4>
                                    <h5 className="card-subtitle mb-2 text-muted">
                                        <CountUp start={0} end={props.data.deaths.value} durataion={2.5} separator="," />
                                    </h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{new Date(props.data.lastUpdate).toDateString()}</h6>
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

export default Cards;