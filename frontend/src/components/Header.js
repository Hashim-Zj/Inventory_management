import React from "react";
import { Link } from "react-router-dom";


function Header() {

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-md bg-dark py-0" data-bs-theme="dark">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">
              <span className="me-1">
                <img src="/Inventory.png" alt="" width={50} />
              </span>
              Your INVENTORY
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
              <ul class="navbar-nav ms-auto me-3">
                <li class="nav-item">
                  <Link className="nav-link" to="/">
                    ItemMaster
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/stock">
                    Stock
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/outs">
                    Purchase
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
