import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { deleteItem, listItems } from "../Apis/feachApi";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ItemStock from "./ItemStock";
import AddPurchase from "./AddPurchase";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    listItems()
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(items);

  const delete_Todo = (id) => {
    deleteItem(id).then((res) => {
      toast.warning("Item Deleted");
      window.location.reload();
    });
  };
  return (
    <div>
      <section className="w-75 mt-2 m-auto">
        {items.length > 0 ? (
          <>
            <h3>Inventory Items</h3>
            <AddItem />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Total Stock</th>
                  <th>Has Expiry</th>
                  <th>Has Entry</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((res) => {
                  return (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.item_name}</td>
                      <td>{res.description}</td>
                      <td>{res.total_stock}</td>
                      <td>{res.has_expiry ? "Yes" : "No"}</td>
                      <td>{res.has_entry_number ? "Yes" : "No"}</td>
                      <td className="d-flex justify-content-between">
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="actionDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                          >
                            Actions
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="actionDropdown"
                          >
                            <li>
                              <EditItem id={res.id} />
                            </li>
                            <li>
                              <span
                                className="dropdown-item text-danger"
                                onClick={(e) => {
                                  const isConfirmed = window.confirm(
                                    "Are you sure you want to delete this Item?"
                                  );
                                  if (isConfirmed) {
                                    delete_Todo(res.id);
                                  }
                                }}
                              >
                                Delete
                              </span>
                            </li>
                            <li>
                              <ItemStock id={res.id} stock={res.goods_in} />
                            </li>
                            <li>
                              <AddPurchase id={res.id} stock={res.total_stock} />
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        ) : (
          <p>No items available.</p>
        )}
      </section>
    </div>
  );
}

export default Home;
