import React, { useState } from 'react'
import { addOut } from '../Apis/feachApi';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddPurchase = ({ id, stock }) => {
  const [item, setItem] = useState({
    quantity: 0
  });
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


  const formSubmit = () => {
    const { quantity } = item
    if (!quantity) {
      toast.warning("Give The Quantity")
    }
    if (quantity > stock) {
      toast.warning("Stock is insufficient");

    } else {
      addOut(id, item).then((res) => {
        console.log(res.data);
        handleClose()
        window.location.reload()
        toast.success("Purchase Added")

      })
    }
  };
  return (
    <div>
      <button className="dropdown-item text-info" onClick={handleShow}>
        Make Purchase
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
          <span>Total Stock is : {stock}</span>
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

export default AddPurchase