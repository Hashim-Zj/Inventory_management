import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { addStock } from '../Apis/feachApi';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';

const AddStock = ({ id }) => {
  const [item, setItem] = useState({
    quantity: '',
    expiry_date: null,
    entry_number: null
  });
  console.log(id);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value
    });
  };
  console.log(item);

  const formSubmit = () => {
    const { quantity, expiry_date, entry_number } = item
    if (!quantity) {
      toast.warning("Give The Quantity")
    } else {
      addStock(id, item).then((res) => {
        console.log(res.data);
        handleClose()
        window.location.reload()
        toast.success("Stock Added")

      })
    }
  };


  return (
    <div>
      <button className="btn btn-success" onClick={handleShow}>
        Add Stock
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Stock Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FloatingLabel controlId="floatingQuantity" label="Quantity" className="mb-4">
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              name="quantity"
              value={item.quantity}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingExpiryDate" label="Expiry Date" className="mb-4">
            <Form.Control
              type="date"
              placeholder="Enter expiry date"
              name="expiry_date"
              value={item.expiry_date}
              onChange={handleChange}

            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingEntryNumber" label="Entry Number" className="mb-4">
            <Form.Control
              type="text"
              placeholder="Enter entry number"
              name="entry_number"
              value={item.entry_number}
              onChange={handleChange}

            />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={(e) => formSubmit()}>
            Submit
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  )
}

export default AddStock