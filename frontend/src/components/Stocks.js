import React, { useEffect, useState } from "react";
import { getAllStock } from "../Apis/feachApi";
import Table from "react-bootstrap/Table";
import { format } from "date-fns";

function Stocks() {
  const [filter, setFilter] = useState({
    item_name: "",
    expiry_date: "",
  });
  const [stocks, setStocks] = useState([]);
  const [stocksToDisplay, setStocksToDisplay] = useState([]);

  useEffect(() => {
    getAllStock()
      .then((res) => {
        const sort_data = sortByExpiryDate(res.data);
        setStocks(sort_data);
        setStocksToDisplay(sort_data);
      })
      .catch((error) => console.error(error));
  }, []);

  const sortByExpiryDate = (data) => {
    return [...data].sort((a, b) => {
      if (!a.expiry_date) return 1;
      if (!b.expiry_date) return -1;
      return new Date(a.expiry_date) - new Date(b.expiry_date);
    });
  };

  // Filter
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const filterSubmition = (e) => {
    e.preventDefault();
    const { item_name, expiry_date } = filter;

    const filteredData = stocks.filter((item) => {
      return (
        (item_name
          ? item.item.toLowerCase().includes(item_name.toLowerCase())
          : true) && (expiry_date ? item.expiry_date === expiry_date : true)
      );
    });

    setStocksToDisplay(filteredData);
  };

  return (
    <div className="mx-4 ">
      <form
        className="d-flex justify-content-center my-4 py-0"
        onSubmit={filterSubmition}
      >
        <input
          type="text"
          name="item_name"
          placeholder="Enter Name"
          onChange={handleFilter}
          value={filter.item_name}
        />
        <input
          type="date"
          name="expiry_date"
          className="mx-3"
          onChange={handleFilter}
          value={filter.expiry_date}
        />
        <button type="submit" className="btn btn-info">
          Filter
        </button>
      </form>

      <Table striped bordered hover>
        <thead>
          <tr className="table-primary">
            <th>Si No:</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Expiry_Date</th>
            <th>Enter_Number</th>
          </tr>
        </thead>
        <tbody>
          {stocksToDisplay.map((res, index) => {
            return (
              <tr key={res.id}>
                <td>{index + 1}</td>
                <td>{res.item}</td>
                <td>{res.quantity}</td>
                <td>
                  {res.expiry_date
                    ? format(new Date(res.expiry_date), "dd/MM/yyyy")
                    : "---"}
                </td>
                <td>{res.entry_number ? res.entry_number : "---"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Stocks;
