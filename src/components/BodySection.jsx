import React from 'react';

function BodySection(props) {
    return (
        
        <div className="sec-2">
        <div className="section22">
            <div className="div-11">
                <p id="para-2">
                    Invoice No : <span id="getdata">
                     {props.pageTitle} </span>
                 
                  
                </p>

            </div>
            <div className="div-22">
                <p id="para-2">
                   <span style={{fontWeight:'bold'}}>  Date : </span>{props.date}
                   
                </p>

            </div>
        </div>
    </div>
    );
}

export default BodySection;