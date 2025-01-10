import React from 'react'
import { Link } from 'react-router-dom';
function Header() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Your INVONTORY</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">ItemMaster</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/stock">Stock</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/outs">Purchase</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header