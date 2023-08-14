import React from 'react';

function TaxDetails(props) {
    return (
        <div className="sec-3">
        <div className="section2">
            <div className="div-1">
                <p>
                    <span className="bill"> Billed to : </span> <br/>
                    <span  id="para-3"> {props.address1}<br/>
                    {props.address2} <br/>
                        CLOTH MERCHANT <br/> </span>
                    BOOKING - <span id="city1">COIMBATORE (641001) </span> <br/>
                    MOBILE NO. - <span id="mobileno1"> {props.mobileno}</span> <br/>
                    GSTIN / UIN &emsp; &ensp;: &ensp;<span id="gst1"> {props.gstno}</span><br/>
                </p>

            </div>
            <div className="div-2">
                <p>
                    <span className="bill"> Shipped to : </span> <br/>
                    <span id="para-4"> {props.address1} <br/>
                        353 , SUKRAWARPET<br/>
                        {props.address2}<br/> </span>
                    BOOKING - <span id="city2">COIMBATORE &nbsp;(641001) </span><br/>
                    MOBILE NO. - <span id="mobileno2"> {props.mobileno}</span> <br/>
                    GSTIN / UIN &emsp; &ensp;: &ensp;<span id="gst2">{props.gstno}</span><br/>
                </p>

            </div>
        </div>
    </div>
    );
}

export default TaxDetails;