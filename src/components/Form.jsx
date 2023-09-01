import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import BodySection from "./BodySection"
import Footer from "./Footer";
import Headsection from "./Headsection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TaxDetails from "./TaxDetails";
import Total from "./Total"

import { useState } from "react";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function Form() {

    const componentRef = useRef();

    const [invoiceNo, setInvoiceNo] = useState("");
    const [date, setDate] = useState("");

    const [address, setAddress] = useState("");
    const [address1, setAddress1] = useState("");
    const [mobileno, setMobileNo] = useState("");
    const [gstno, setGstNo] = useState("");
    const [aname, setAname] = useState("");
    const [pincode, setPinCode] = useState("");
    const [des, setDes] = useState("");
    const [hssn, setHssn] = useState("");
    const [qty, setQty] = useState("");
    const [unit, setUnit] = useState("");
    const [price, setPrice] = useState("");

    const [data, setData] = useState([]);
    const [showDivs, setShowDivs] = useState(false);
    const [editingIndex, setEditingIndex] = useState(-1);
    const [gstValue, setGstValue] = useState("");
    
    const gstRate = gstValue;

    function check(e) {

        e.preventDefault()


        var rowData = {
            description: des,
            // hssncode: hssn,
            price: price,
            quantity: qty,
            unit: unit,
            amt: parseFloat(price) * parseFloat(qty)

        }
        setData([...data, rowData]);

        setDes("");
        // setHssn("");
        setQty("");
        setUnit("");
        setPrice("");






    };





    const myData = data?.map((items, i) => {

        return (<tr key={i} className="row1">
            <td>{i + 1}</td>
            <td>{items.description}</td>
            <td>{hssn}</td>
            <td>{items.quantity}</td>
            <td>{items.unit}</td>
            
            <td>{items.price}</td>
            <td>{items.amt}</td>

        </tr>)

    })

    const deleteRow = (index) => {
        const updatedRows = [...data];
        updatedRows.splice(index, 1);
        setData(updatedRows);
    };



    function accessRow(items, index) {
        setShowDivs(true);

        setEditingIndex(index)

        setDes(items.description)
        // setHssn(items.hssncode)
        setQty(items.quantity)
        setUnit(items.unit)
        setPrice(items.price)



    }
    function cancel() {
        setShowDivs(false);

        setData([...data])
        setDes("")
        // setHssn("")
        setQty("")
        setUnit("")
        setPrice("")


    }




    const myDatas = data?.map((items, index) => {

        return (<tr key={index} className="row1">
            <td>{index + 1}</td>
            <td>{items.description}</td>
            <td>{hssn}</td>
            <td>{items.quantity}</td>
            <td>{items.unit}</td>
            
            <td>{items.price}</td>
            <td>{items.amt}</td>
            <td> <div >< FontAwesomeIcon onClick={() => accessRow(items, index)} icon={faPenToSquare} /></div> </td>
            <td><div className='arrr'><FontAwesomeIcon onClick={() => deleteRow(index)} icon={faTrash} /></div></td>

        </tr>)

    })
    const handleUpdate = () => {
        const updatedArray = [...data];
        updatedArray[editingIndex] = {
            description: des,
            // hssncode: hssn,
            price: price,
            quantity: qty,
            unit: unit,
            amt: parseFloat(price) * parseFloat(qty)

        };
        setData(updatedArray)
        setDes("");

        // setHssn("")
        setQty("")
        setUnit("")
        setPrice("")
        setEditingIndex(-1);
        setShowDivs(false)
    };

    const total = data?.reduce((acc, current) => acc + parseFloat(current.amt), 0);
    const gstValues = (total * gstRate) / 100;
    const grandTotal = total + gstValues;
    function convertNumberToWords(num) {
        var ones = [
          "",
          "One ",
          "Two ",
          "Three ",
          "Four ",
          "Five ",
          "Six ",
          "Seven ",
          "Eight ",
          "Nine ",
          "Ten ",
          "Eleven ",
          "Twelve ",
          "Thirteen ",
          "Fourteen ",
          "Fifteen ",
          "Sixteen ",
          "Seventeen ",
          "Eighteen ",
          "Nineteen ",
        ];
        var tens = [
          "",
          "",
          "Twenty",
          "Thirty",
          "Forty",
          "Fifty",
          "Sixty",
          "Seventy",
          "Eighty",
          "Ninety",
        ];
        if ((num = num.toString()).length > 9) return "Overflow: Maximum 9 digits supported";
        var n = ("000000000" + num)
          .substr(-9)
          .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return;
        var str = "";
        str +=
          n[1] != 0
            ? (ones[Number(n[1])] || tens[n[1][0]] + " " + ones[n[1][1]]) + "Crore "
            : "";
        str +=
          n[2] !=0
            ? (ones[Number(n[2])] || tens[n[2][0]] + " " + ones[n[2][1]]) + "Lakh "
            : "";
        str +=
          n[3] != 0
            ? (ones[Number(n[3])] || tens[n[3][0]] + " " + ones[n[3][1]]) +
              "Thousand "
            : "";
        str +=
          n[4] != 0
            ? (ones[Number(n[4])] || tens[n[4][0]] + " " + ones[n[4][1]]) + "Hundred "
            : "";
        str +=
          n[5] != 0
            ? (str != "" ? "and " : "") +
              (ones[Number(n[5])] || tens[n[5][0]] + " " + ones[n[5][1]])
            : "";
        return str;
      }
 
      const totalInIndianRupees = convertNumberToWords(Math.round(grandTotal) );
 
    console.log();
    return (
        <div className='Mainpart'>
            <div className="section-1">

                <div className="indate">
                    <div > <label htmlFor="INVOICE NO :">INVOICE NO :</label> <br />
                        <input onChange={(e) => { setInvoiceNo(e.target.value) }} value={invoiceNo} type="text" placeholder="Type the Invoice Number" id="data1" />

                    </div>

                    <div className="indate2"> <label htmlFor="">DATE : :</label> <br />
                        <input onChange={(e) => { setDate(e.target.value) }} value={date} type="date" placeholder="Type the Date" id="data2" />
                    </div>
                </div>


                <div className="add">
                    <label htmlFor="Add">ADDRESS :</label>
                    <div >
                        <  input onChange={(e) => { setAname(e.target.value) }} value={aname} type="text" placeholder="Type the Name" id="shipping1" />
                        <  input onChange={(e) => { setAddress(e.target.value) }} value={address} type="text" placeholder="Type the Address" id="shipping" /> </div>
                    <div className="cmg">
                        <div> < input onChange={(e) => { setAddress1(e.target.value) }} value={address1} type="text" placeholder="city" id="city" /></div>
                        <div className="citydiv"><input onChange={(e) => { setPinCode(e.target.value) }} value={pincode} type="text" placeholder="Pincode " id="mobileno" /> </div> <br />

                    </div>
                    <div className='mg'>  <div className="citydivv"><input onChange={(e) => { setMobileNo(e.target.value) }} value={mobileno} type="text" placeholder="Mobileno " id="mobileno" /> </div>
                        <div className="divgst"> < input onChange={(e) => { setGstNo(e.target.value) }} value={gstno} type="text" placeholder="Gstin/uin no" id="gst" /> </div> </div>


                </div>

                <form onSubmit={(e) => check(e)} >
                    <div className="tab">
                        <div className='flex'>
                            <div className=""><label htmlFor="">GST:</label> <br />
                                <input onChange={(e) => { setGstValue(e.target.value) }} value={gstValue} valuetype="text" required placeholder="Enter the Gstvalue" />
                            </div>
                            <div className='hss'>
                                <label htmlFor="">HSSN CODE</label> <br />
                                <input onChange={(e) => { setHssn(e.target.value) }} value={hssn} type="number" required placeholder="Enter the HSSN" id="hssn" />
                            </div></div>




                    </div>
                    <div className="flex">

                        <div className=""><label htmlFor="">DESCRIPTION:</label> <br />
                            <input onChange={(e) => { setDes(e.target.value) }} value={des} valuetype="text" required placeholder="Describe the Goods" />
                        </div>
                        <div className="qt">
                            <label htmlFor="">QTY</label> <br />
                            <input onChange={(e) => { setQty(e.target.value) }} value={qty} type="number" inputMode='numeric' required placeholder="Enter the qty" />
                        </div>
                    </div>
                    <div className="pri">
                        <div className="price1">
                            <label htmlFor="">UNIT</label> <br />
                            <select onChange={(e) => { setUnit(e.target.value) }} value={unit} id="sel">
                                <option value="Pcs">Pcs</option>
                                <option value="Set">Set</option>

                            </select>
                            {/* <input onChange={(e) => { setUnit(e.target.value) }} value={unit} type="number" required placeholder="Enter the unit" /> */}
                        </div>
                        <div className="price">
                            <label htmlFor="">PRICE</label> <br />
                            <input required onChange={(e) => { setPrice(e.target.value) }} value={price} type="number" placeholder="Enter a price" />
                        </div>

                    </div>
                    {!showDivs && (<div className='submitbtn'>  <button type="submit" className="sbtn" value={"Add"}  > ADD </button>

                    </div>)}
                </form>

                <div className="qty">


                    <div className='aa'>

                        {showDivs && <div className='uc'>

                            <div onClick={handleUpdate} className="sbtn">
                                <div >Update</div>
                            </div>

                            <div onClick={cancel} className="sbtn1">
                                <div > Cancel</div>
                            </div>

                        </div>

                        }
                    </div>
                    <div className='rowtable'>
                        <table id='table1'>
                            <thead className='th1'>
                                <tr>
                                    <th className='th1' >S.N,</th>
                                    <th className='th1'>Description of Goods</th>
                                    <th className='th1'>HSSN</th>
                                    <th className='th1'>Qty</th>
                                    <th className='th1'>Unit</th>
                                    <th className='th1'>Price</th>
                                    <th className='th1'>Amount( )</th>
                                </tr>
                            </thead>
                            <tbody id='td1'>


                                {data && myDatas}


                            </tbody>

                        </table>

                    </div>


                    <div className="rad">
                        <div className="in">
                            <div className="in1"> <input type="Radio" name="radio2text" id="yes" />TamilNadu</div>
                            <div className="in2"><input type="Radio" name="radio2text" id="yes" />Others</div>
                        </div>

                    </div>
                    <div>
                        <div id="IncidentID" className="hidden row">

                            CGST: <input type="Text" name="Incident ID" />
                        </div>

                        <div id="Description" className="hidden row">
                            SGST : <input type="Text" name="Description" />
                        </div>

                        <div id="Ref" className="hidden row">
                            IGST : <input type="Text" name="Ref row" />
                        </div> </div>


                </div>


                <div className='btn'>
                    <ReactToPrint

                        trigger={() => <button type="button" className='btn1'> Print/Download</button>}
                        content={() => componentRef.current}
                    />

                </div>

            </div>

            <div ref={componentRef}>
                <div size="A4" className='page'>

                    <div className='main'>
                        <div className='section'>
                            <Headsection />
                            <BodySection pageTitle={invoiceNo} date={date} />
                            <TaxDetails address1={address} address2={address1} mobileno={mobileno} gstno={gstno} aname={aname} pincode={pincode} />
                            <div>
                                <table className="column-bordered-table ">
                                    <thead className='thh'>
                                        <tr>
                                            <th>S.N,</th>
                                            <th>Description of Goods </th>
                                            <th>HSSN</th>


                                            <th>Qty.</th>
                                            <th>Unit</th>
                                            <th>Price </th>

                                            <th>Amount (  ) </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && myData}

                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td></tr>
                                    </tbody>
                                    <tfoot className='foo'>
                                        <tr className='lasbb'>

                                            <th className='bb'></th>
                                            <th className='bb'></th>
                                            <th className='bb'></th>
                                            <th className='bb3'></th>


                                            <th className='bb2 ' colSpan={2}>Sub Total</th>
                                            <th className='bb5' id='total' > {total} </th>

                                        </tr>
                                        <tr>

                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th className='bb2 ' colSpan={2}>SGST:({gstValue / 2}%)+CGST:({gstValue / 2}%) </th>
                                            <th className='bb5' id='total' > {gstValues} </th>

                                        </tr>
                                        <tr>

                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>

                                            <th className='bb2 ' colSpan={2}>Grand Total</th>
                                            <th className='bb5' id='total' > {grandTotal} </th>

                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                            
                            <Total hssn={hssn} gstRate={gstValues} tax={total} gst={gstValue} grandTotal={grandTotal} rupee={totalInIndianRupees}  />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;