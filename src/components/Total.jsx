import React from 'react';

function Total(props) {
    return (
        <div>
            <div class="total">
                            <div class="grand">Grand Total 240.00 pcs.</div>
                            <div class="date">31,311.00</div>
                        </div>
                        <div class="hsn">
                            <p>
                                <span class="span1"> HSN/SAC Tax Rate &emsp;Taxable Amt.&emsp; IGST Amt. &ensp;Total
                                    Tax</span> <br/>
                                520851 &emsp; 5% &emsp; &emsp; 29,820.00&emsp; &emsp; 1,491.00&emsp; 1,491.00 <br/>
                                <span class="span2">RupeesThirty One Thousand Three Hundred Eleven Only </span>
                            </p>
                        </div>
                        <div class="baa">
                            <div class="bank">HDFC BANK BALOTRA : 50200059653193</div>
                            <div class="ifsc">IFSC CODE : HDFC0000643</div>
                        </div>
        </div>
    );
}

export default Total;