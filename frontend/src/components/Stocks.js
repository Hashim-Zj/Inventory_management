import React, { useEffect, useState } from 'react'
import { getAllStock } from '../Apis/feachApi'
import Table from "react-bootstrap/Table";
import { format } from 'date-fns';


function Stocks() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    getAllStock().then((res) => {
      setStocks(res.data)
    }).catch((error) => console.error(error));
  }, []);


  return (
    <div>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>
              Expiry_Date
            </th>
            <th>Enter_Number</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((res,index) => {
            return (
              <tr key={res.id}>
                <td>{index + 1}</td>
                <td>{res.item}</td>
                <td>{res.quantity}</td>
                <td>{res.expiry_date ? format(new Date(res.expiry_date), 'dd/MM/yyyy') : <></>}</td>

                <td>{res.entry_number}</td>
              </tr>
            )
          })}

        </tbody>
      </Table>

    </div>
  )
}

export default Stocks