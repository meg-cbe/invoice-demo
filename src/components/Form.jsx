import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import BodySection from "./BodySection"
import Footer from "./Footer";
import Headsection from "./Headsection";
import Table from "./Table";
import TaxDetails from "./TaxDetails";
import Total from "./Total"
import { useForm } from "react-hook-form";
import {  useState } from "react";

function Form() {

  
        const componentRef = useRef();
       
        const [invoiceNo, setInvoiceNo] = useState("");
        const [date, setDate] = useState("");
        const [vehicleNo, setvehicleNo] = useState("");
        const [supply, setSupply] = useState("");
        const [transport, setTransport] = useState("");
        const [station, setStation] = useState("");
        const [address, setAddress] = useState("");
        const [address1, setAddress1] = useState("");
        const [mobileno, setMobileNo] = useState("");
        const [gstno, setGstNo] = useState("");
        const [description, setDescription] = useState('');
        const [hssn, setHssn] = useState('');
        const [baleNo, setBaleNo] = useState('');
        const [quality, setQuality] = useState('');
        const [unit, setUnit] = useState('');
        const [price, setPrice] = useState('');


        const addValues = (event) => {
            event.preventDefault();
            const val = {
              description,hssn,baleNo,quality,unit,price,
            };
            props.func(val);
            clearState();
          };
          
          const clearState = () => {
            setDescription('');
            setHssn('');
            setBaleNo('');
            setQuality('');
            setUnit('');
            setPrice('');
          };
        
    return (
        <div className='Mainpart'>
        <div className="section-1">
        <form onsubmit="SubmitBtn(event)">
            <div className="indate">
                <div > <label for="INVOICE NO :">INVOICE NO :</label> <br/>
                    <input onChange={(e)=>{setInvoiceNo(e.target.value)}} value={invoiceNo} type="text" placeholder="Type the Invoice Number" id="data1"/>
                </div>

                <div className="indate2"> <label for="">DATE : :</label> <br/>
                    <input onChange={(e)=>{setDate(e.target.value)}} value={date} type="text" placeholder="Type the Date" id="data2"/>
                </div>
            </div><br/>

            <div className="no">
                <div><label for="vehicleno">VEHICLE NO :</label><br/>
                    <input onChange={(e)=>{setvehicleNo(e.target.value)}} value={vehicleNo} type="text" placeholder="Type the Vehicle no" id="data3"/>
                </div>
                <div className="ebill">
                    <label for="E-waybill">PLACE OF SUPPLY :</label> <br/>
                    <input onChange={(e)=>{setSupply(e.target.value)}} value={supply} type="text" placeholder="Type the Supply Address" id="data4"/><br/>
                </div>
            </div>
            <div className="no1">
                <div><label for="vehicleno">TRANSPORT :</label><br/>
                    <input onChange={(e)=>{setTransport(e.target.value)}} value={transport} type="text" placeholder="Type the Transport" id="data3"/>
                </div>
                <div className="ebill">
                    <label for="E-waybill">STATION :</label> <br/>
                    <input onChange={(e)=>{setStation(e.target.value)}} value={station} type="text" placeholder="Type the Station" id="data4"/><br/>
                </div>
            </div>
            <div className="add">
                <label for="Add">ADDRESS :</label> <br/>
                <div > <  input  onChange={(e)=>{setAddress(e.target.value)}} value={address} type="text" placeholder="Type the Address" id="shipping"/> </div>
                <div className="cmg">
                    <div> < input onChange={(e)=>{setAddress1(e.target.value)}} value={address1}  type="text" placeholder="city" id="city"/></div>
                    <div className="citydiv"><input onChange={(e)=>{setMobileNo(e.target.value)}} value={mobileno} type="text" placeholder="Mobileno " id="mobileno"/> </div> <br/>

                </div>
                <div className="divgst"> < input onChange={(e)=>{setGstNo(e.target.value)}} value={gstno} input type="text" placeholder="Gstin/uin no" id="gst"/> </div>
            </div>
        
            <div className="tab">
                <div className=""><label for="">DESCRIPTION:</label> <br/>
                    <input onChange={(e)=>{setDescription(e.target.value)}} value={description} type="text" placeholder="Describe the Goods" id=""/>
                </div>

            </div>
            <div className="qty">
                <div className="qty1">
                    <div>
                        <label for="">HSSN/SA CODE</label> <br/>
                        <input onChange={(e)=>{setHssn(e.target.value)}} value={hssn} type="text" placeholder="Enter the HSSN" id="hssn"/>
                    </div>
                    <div className="bale">
                        <label for="">BALE NO</label> <br/>
                        <input onChange={(e)=>{setBaleNo(e.target.value)}} value={baleNo} type="text" placeholder="Enter the baleno" id=""/>
                    </div>
                    <div className="qt">
                        <label for="">QTY</label> <br/>
                        <input onChange={ (e)=>{setQuality(e.target.value)}} value={quality} type="text" placeholder="Enter the qty" id=""/>
                    </div>
                </div>
                <div className="pri">
                    <div className="price1">
                        <label for="">UNIT</label> <br/>

                        <input onChange={(e)=>{setUnit(e.target.value)}} value={unit} type="text" placeholder="Enter the unit" id=""/>
                    </div>
                    <div className="price">
                        <label for="">PRICE</label> <br/>
                        <input onChange={(e)=>{setPrice(e.target.value)}} value={price} type="text" placeholder="Enter a price" id=""/>
                    </div>
                  <div className='submitbtn'>  <button onClick={addValues}   type="text"  className="sbtn">Add</button></div> 
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
           <BodySection pageTitle={invoiceNo} date={date} vehicle={vehicleNo} supply={supply} transport={transport} station={station} />
          <TaxDetails address1={address} address2={address1} mobileno={mobileno} gstno={gstno}/>
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