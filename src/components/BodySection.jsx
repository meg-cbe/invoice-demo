import React from 'react';

function BodySection(props) {
    return (
        
        <div className="sec-2">
        <div className="section2">
            <div className="div-1">
                <p id="para-2">
                    Invoice No &emsp; &emsp;&nbsp; &ensp; : &nbsp; &nbsp; <span id="getdata">
                     {props.pageTitle} </span> <br/>
                    Dated &emsp; &emsp; &emsp; &emsp; &ensp; : &nbsp; &nbsp; <span id="getdata1">
                    {props.date}</span> <br/>
                    Place of Supply  &emsp; : &nbsp; &nbsp; {props.supply} <br/>
                  
                </p>

            </div>
            <div className="div-2">
                <p id="para-2">
                    Transport &emsp; &emsp; &ensp; : &nbsp; &nbsp; {props.transport}<br/>
                    Vehicle No &emsp; &emsp;&nbsp; :  &emsp; <span id="vehicleno"></span> &nbsp;
                    &nbsp;{props.vehicle} <br/>
                    Station &emsp; &emsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; : &nbsp; &nbsp;
                    {props.station} <br/>
                 
                </p>

            </div>
        </div>
    </div>
    );
}

export default BodySection;