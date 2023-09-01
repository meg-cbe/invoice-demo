import React from 'react';

function Total(props) {
    return (
        <div>
    
                       
<div>
<div className="hsn">
                        <table className='tt' id='tt'>
                            <tbody>
                            <tr>
                                <th id='tr'>HSN/SAC</th>
                                <th id='tr'>TaxRate</th>
                                <th id='tr'>TaxbleAmt</th>
                                <th id='tr'>IGSTAmt</th>
                                <th id='tr'>TotalTax</th>
                            </tr>
                            <tr>
                                <td id='tr'>{props.hssn}</td>
                                <td id='tr'> {props.gstRate}</td>
                                <td id='tr'>{props.tax}</td>
                                <td  id='tr'>{props.gst} </td>
                                <td id='tr'> {props.grandTotal}</td>
                            </tr>
                            </tbody>
                        </table>
                              
                                <span className="span2"> Rupee {props.rupee} </span>
                           
                        </div>
    
</div>
                       


                        <div className="baa">
                            <div className="bank">HDFC BANK BALOTRA : 50200059653193</div>
                            <div className="ifsc">IFSC CODE : HDFC0000643</div>
                        </div>
        </div>
    );
}

export default Total;