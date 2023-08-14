
import React, { useState } from 'react';
import Form from './Form';
import jsonData from'./data.json';
function Table(props) {
    const[productData,setProductData] = useState(jsonData);

  
  const tableRows = productData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalStudents = productData.length;
    data.id = totalStudents + 1;
    const updatedproductData = [...productData];
    updatedproductData.push(data);
    setProductData(updatedproductData);
  };

    return (
      <div>

        <table class="column-bordered-table ">
                            <thead>
                                <tr> 
                                <th>S.N,&nbsp;</th>
                                <th>&nbsp;&nbsp;Description of Goods &nbsp;&nbsp;</th>
                                <th>HSSN/SA <br/>
                                    Code </th>
                                <th>&nbsp;Bale <br/>
                                    No.&nbsp;</th>
                                <th>Qty.</th>
                                <th>&nbsp;&nbsp;Unit&nbsp;&nbsp;</th>
                                <th>&nbsp;&nbsp;&nbsp;&nbsp;Price</th>
                                <th>&nbsp;&nbsp;&nbsp;CGST <br/>Rate</th>
                                <th>&ensp;CGST <br/>Amount</th>
                                <th>&ensp;SGST <br/>Rate&ensp;</th>
                                <th>&ensp;SGST <br/> Amount&ensp;</th>
                                <th>&nbsp;&nbsp;&nbsp;IGST <br/> Rate&ensp;</th>
                                <th>&ensp;IGST <br/> Amount&ensp;</th>
                                <th>&nbsp;Amount(&nbsp;)&nbsp;</th>

                                </tr>
                            </thead>
                            <tbody>

                            {tableRows}
                                <tr class="row1">
                                    <td>1.</td>
                                    <td>NIGHTY 2.90MTR</td>
                                    <td>520851</td>
                                    <td></td>
                                    <td>120.00</td>
                                    <td>Pcs.</td>
                                    <td>116.75</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>5.00 %</td>
                                    <td>700.50</td>
                                    <td>14,010.00</td>
                                </tr>
                         
                                <tr class="row3">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <Form func={addRows}/> 
                        </div>
    );
}

export default Table;