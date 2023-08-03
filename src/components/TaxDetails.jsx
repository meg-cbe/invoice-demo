import React from 'react';

function TaxDetails(props) {
    return (
        <div className="sec-3">
        <div className="section2">
            <div className="div-1">
                <p>
                    <span className="bill"> Billed to : </span> <br/>
                    <span id="para-3"> SUNDHA MATA FASHION <br/>
                        353 , SUKRAWARPET<br/>
                        CLOTH MERCHANT <br/> </span>
                    BOOKING - <span id="city1">COIMBATORE (641001) </span> <br/>
                    MOBILE NO. - <span id="mobileno1"> 7424872846</span> <br/>
                    GSTIN / UIN &emsp; &ensp;: &ensp;<span id="gst1"> 33CSBPK6030M1ZT</span><br/>
                </p>

            </div>
            <div className="div-2">
                <p>
                    <span className="bill"> Shipped to : </span> <br/>
                    <span id="para-4"> SUNDHA MATA FASHION <br/>
                        353 , SUKRAWARPET<br/>
                        CLOTH MERCHANT <br/> </span>
                    BOOKING - <span id="city2">COIMBATORE &nbsp;(641001) </span><br/>
                    MOBILE NO. - <span id="mobileno2"> 7424872846</span> <br/>
                    GSTIN / UIN &emsp; &ensp;: &ensp;<span id="gst2"> 33CSBPK6030M1ZT</span><br/>
                </p>

            </div>
        </div>
    </div>
    );
}

export default TaxDetails;