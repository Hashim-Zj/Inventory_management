import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { addItem } from '../Apis/feachApi';
import { toast } from 'react-toastify';

function AddItem() {
  const [show, setShow] = useState(false); 
  const [item, setItem] = useState({
    item_name: '',
    description: '',
    has_expiry: false,
    has_entry_number: false
  });


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setItem({
      ...item,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const formSubmit = () => {
    const { item_name, description, has_expiry, has_entry_number } = item
    if (!item_name || !description) {
      toast.warning("Please Fill the Details")
    }
    else {
      addItem(item).then((res) => {
        console.log(res.data);
        handleClose()
        toast.success("Item Added")
      })
    }

  };

  return (
    <div>
      {/* Button to open modal */}
      <button className="btn btn-success m-3" onClick={handleShow}>
        Add Item
      </button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="p-4 rounded shadow-lg bg-light">
            {/* Item Name Field */}
            <FloatingLabel controlId="floatingItemName" label="Item Name" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Enter item name"
                name="item_name"
                value={item.item_name}
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            {/* Description Field */}
            <FloatingLabel controlId="floatingDescription" label="Description" className="mb-4">
              <Form.Control
                as="textarea"
                placeholder="Enter description"
                name="description"
                value={item.description}
                onChange={handleChange}
                required
                rows={3}
              />
            </FloatingLabel>

            {/* Has Expiry Checkbox */}
            <Form.Group controlId="hasExpiry" className="mb-4">
              <Form.Check
                type="checkbox"
                label="Has Expiry?"
                name="has_expiry"
                checked={item.has_expiry}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Has Entry Number Checkbox */}
            <Form.Group controlId="hasEntryNumber" className="mb-4">
              <Form.Check
                type="checkbox"
                label="Has Entry Number?"
                name="has_entry_number"
                checked={item.has_entry_number}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
        </Modal.Body>

        {/* Modal Footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => formSubmit()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddItem;
