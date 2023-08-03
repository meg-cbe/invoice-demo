import React from 'react';

function BodySection(props) {
    return (
        <div className="sec-2">
        <div className="section2">
            <div className="div-1">
                <p id="para-2">
                    Invoice No &emsp; &emsp;&nbsp; &ensp; : &nbsp; &nbsp; <span id="getdata">
                        INVOICE6518 </span> <br/>
                    Dated &emsp; &emsp; &emsp; &emsp; &ensp; : &nbsp; &nbsp; <span id="getdata1">
                        21-07-2023 </span> <br/>
                    Place of Supply  &emsp; : &nbsp; &nbsp; Tamilnadu(33) <br/>
                  
                </p>

            </div>
            <div className="div-2">
                <p id="para-2">
                    Transport &emsp; &emsp; &ensp; : &nbsp; &nbsp; VRL LOGISTICS LIMITED <br/>
                    Vehicle No &emsp; &emsp;&nbsp; : &emsp; <span id="vehicleno"></span> &nbsp;
                    &nbsp; <br/>
                    Station &emsp; &emsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; : &nbsp; &nbsp;
                    COIMBATORE <br/>
                 
                </p>

            </div>
        </div>
    </div>
    );
}

export default BodySection;