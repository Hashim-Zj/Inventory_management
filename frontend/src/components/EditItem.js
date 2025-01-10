import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { editItem, getItem } from '../Apis/feachApi';
import { toast } from 'react-toastify';

const EditItem = ({ id }) => {
  const [show, setShow] = useState(false); // Modal visibility state
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

  useEffect(() => {
    getItem(id).then((res) => {
      setItem(res.data)
    })
  }, [id])
  const formSubmit = () => {
    const { item_name, description, has_expiry, has_entry_number } = item
    if (!item_name || !description) {
      toast.warning("Please Fill the Details")
    }
    else {
      editItem(id, item).then((res) => {
        console.log(res.data);
        handleClose()
        toast.success("Item Edited")
        window.location.reload()
      })
    }

  };
  return (
    <div>
      <button className="dropdown-item text-info" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="p-4 rounded shadow-lg bg-light">
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

            <Form.Group controlId="hasExpiry" className="mb-4">
              <Form.Check
                type="checkbox"
                label="Has Expiry?"
                name="has_expiry"
                checked={item.has_expiry}
                onChange={handleChange}
              />
            </Form.Group>

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

export default EditItem;
