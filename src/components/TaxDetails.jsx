import React from 'react';

function TaxDetails(props) {
    return (
        <div className="sec-3">
        <div className="section2">
            <div className="div-1">
                <p className='bill'>
                    <span className="bill"> Billed to : {props.aname}</span> <br/>
                    <span  id="para-3"> {props.address1}<br/>
                    {props.address2} {props.pincode}<br/>
                       </span> 
                    MOBILE NO <span id="mobileno1"> :{props.mobileno}</span> <br />
                    GST NO &emsp; &ensp;: &ensp;<span id="gst1"> {props.gstno}</span>
                </p>
            </div>
            <div className="div-2">
                <p className='bill'>
                    <span className="bill"> Shipped to : {props.aname} </span> <br/>
                    <span id="para-4"> {props.address1} <br/>
                       
                        {props.address2} {props.pincode}<br/> </span>
                 
                    MOBILE NO  <span id="mobileno2">: {props.mobileno}</span> <br/>
                    GST NO&emsp; &ensp;: &ensp;<span id="gst2">  {props.gstno}</span><br/>
                </p>

            </div>
        </div>
    </div>
    );
}

export default TaxDetails;