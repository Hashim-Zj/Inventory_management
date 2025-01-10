import React, { useState } from 'react'
import { Modal, Button, Table } from 'react-bootstrap';
import { format } from 'date-fns';
import AddStock from './AddStock';

const ItemStock = ({ id, stock }) => {
  const [show, setShow] = useState(false);


  console.log(id);


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  console.log(stock);

  return (
    <div>
      <button className="dropdown-item text-info" onClick={handleShow}>
        View Stocks
      </button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Stocks <span><AddStock id={id} /></span></Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Expiry Date</th>
                <th>Entry No</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((res) => (
                <tr key={res.id}>
                  <td>{res.id}</td>
                  <td>{res.item}</td>
                  <td>{res.quantity}</td>
                  <td>{res.expiry_date}</td>
                  <td>{res.entry_number}</td>
                  <td>{format(new Date(res.date_added), 'dd/MM/yyyy')}</td>
                </tr>
              ))}


            </tbody></Table>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ItemStock