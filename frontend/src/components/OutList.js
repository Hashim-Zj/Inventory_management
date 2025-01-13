import React, { useEffect, useState } from 'react'
import { getOutList } from '../Apis/feachApi';
import Table from "react-bootstrap/Table";
import { format } from 'date-fns';

function OutList() {
  const [outs, setOuts] = useState([])

  useEffect(() => {
    getOutList().then((res) => {
      setOuts(res.data)
    }).catch((error) => console.error(error));
  }, []);
  return (
    <div className='mx-5 mt-5'>
      <Table striped bordered hover>
        <thead>
          <tr className='table-primary'>
            <th>Si no:</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {outs.map((res) => {
            return (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.item}</td>
                <td>{res.quantity}</td>
                <td>{format(new Date(res.date_removed), 'dd/MM/yyyy')}</td>

              </tr>
            )
          })}

        </tbody>
      </Table>
    </div>
  )
}

export default OutList