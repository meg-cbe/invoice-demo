import React from 'react';

function Headsection(props) {
    return (
        <div className="sec-1">
                            <div>
                               
                                <p className="gst"> GSTIN : 08FXPB7612K1ZX </p>
                                <div>
                                    <div><img src="assets/download.jpg" className="image" alt='logo'/> </div>
                                </div>
                            </div>
                            <div>
                                <div className="taxx">
                                    <p className="tax" >TAX INVOICE </p>
                                </div>
                                <div>
                                    <span className="header"> A ONE INDUSTRIES </span> <br/>
                                    <p className="para1">
                                        HEAVY INDUSTRIAL AREA,,NAKODE ROAD,JASOL <br/>
                                        <span className="picode">BALOTRA(RAJASTHAN), PINCODE - 344024 </span>

                                    </p>

                                    <span className="pan">PAN:</span><br/>
                                    <p className="tel"> Tel.:7424872846 email : harshabansai@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <p className="fonts">Original Copy</p>
                            </div>
                        </div>
    );
}

export default Headsection;