import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import BodySection from "./BodySection"
import Footer from "./Footer";
import Headsection from "./Headsection";
import Table from "./Table";
import TaxDetails from "./TaxDetails";
import Total from "./Total"
function Form(props) {

        const componentRef = useRef();
   
    return (
        <div className='Mainpart'>
        <div className="section-1">
        <form onsubmit="SubmitBtn(event)">
            <div className="indate">
                <div> <label for="INVOICE NO :">INVOICE NO :</label> <br/>
                    <input type="text" placeholder="Type the Invoice Number" id="data1"/>
                </div>
                <div className="indate2"> <label for="">DATE : :</label> <br/>
                    <input type="text" placeholder="Type the Date" id="data2"/>
                </div>
            </div><br/>

            <div className="no">
                <div><label for="vehicleno">VEHICLE NO :</label><br/>
                    <input type="text" placeholder="Type the Vehicle no" id="data3"/>
                </div>
                <div className="ebill">
                    <label for="E-waybill">E-WAY BILL :</label> <br/>
                    <input type="text" placeholder="Type the E-waybill no" id="data4"/><br/>
                </div>
            </div>
            <div className="add">
                <label for="Add">ADDRESS :</label> <br/>
                <div> <input type="text" placeholder="Type the Address" id="shipping"/> </div>
                <div className="cmg">
                    <div> <input type="text" placeholder="city" id="city"/></div>
                    <div className="citydiv"><input type="text" placeholder="Mobileno " id="mobileno"/> </div> <br/>

                </div>
                <div className="divgst"> <input type="text" placeholder="Gstin/uin no" id="gst"/> </div>
            </div>
            <div className="sbtn"> <input type="submit" className="btn1" value="Submit"/></div>

            <div className="tab">
                <div className=""><label for="">DESCRIPTION:</label> <br/>
                    <input type="text" placeholder="Describe the Goods" id=""/>
                </div>

            </div>
            <div className="qty">
                <div className="qty1">
                    <div>
                        <label for="">HSSN/SA CODE</label> <br/>
                        <input type="text" placeholder="Enter the HSSN" id="hssn"/>
                    </div>
                    <div className="bale">
                        <label for="">BALE NO</label> <br/>
                        <input type="text" placeholder="Enter the baleno" id=""/>
                    </div>
                    <div className="qt">
                        <label for="">QTY</label> <br/>
                        <input type="text" placeholder="Enter the qty" id=""/>
                    </div>
                </div>
                <div className="pri">
                    <div className="price1">
                        <label for="">UNIT</label> <br/>

                        <input type="text" placeholder="Enter the unit" id=""/>
                    </div>
                    <div className="price">
                        <label for="">PRICE</label> <br/>
                        <input type="text" placeholder="Enter a price" id=""/>
                    </div>
                </div>
              <div className="rad">
             <div className="in">
                <div className="in1"> <input type="Radio" name="radio2text" value="yes" id="yes"  checked="checked"/>TamilNadu</div>
                <div className="in2"><input type="Radio" name="radio2text" id="yes" value="no"/>Others</div>
             </div>  


            </div>  
<div> 
<div id="IncidentID" className="hidden row">

    CGST: <input type="Text" name="Incident ID"/>
   </div>
   
   <div id="Description" className="hidden row">
    SGST : <input type="Text" name="Description"/>
   </div>  
   
   <div id="Ref" className="hidden row">
    IGST : <input type="Text" name="Ref row"/>
   </div> </div>

            </div>

 
<div className='btn'>
<ReactToPrint

        trigger={() => <button type="button" class='btn1'> Print/Download</button>}
        content={() => componentRef.current}
      />
    
</div>
        </form>
    </div>
    
    <div ref={componentRef}>
             <page size="A4">
             
        <div className='main'>
          <div className='section'>
           <Headsection/>
           <BodySection/>
          <TaxDetails/>
            <Table/>
           <Total/>
           <Footer/>
          </div>
        </div>
      </page>
        </div>
    </div>
    );
}

export default Form;