import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
       <div>
    <nav className="navbar navbar-inverse">
  <div className="container">
    <div className="navbar-header">
      <Link className="navbar-brand" to="#">{props.title}</Link>
    </div>
    <ul className='nav navbar-nav'>
        <li>
        <Link to="/Home">Home</Link>
        </li>
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" to="#">Categories
        <span className="caret"></span></a>
        <ul className='dropdown-menu'>
          <li>
            <Link to="/Beauty">Beauty</Link>
          </li>
          <li>
            <Link to="/Electronies">Electronies</Link>
          </li>
        </ul>
      </li>

  <form className="navbar-form navbar-left">
  <div className="input-group">
    <input type="text" className="form-control" placeholder="Search"/>
    <div className="input-group-btn">
      <button className="btn btn-default" type="submit">
        <i className="glyphicon glyphicon-search"></i>
      </button>
    </div>
  </div>
</form>
      <ul className="nav navbar-nav navbar-left">
        <li className="dropdown">
          <a to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <span className="glyphicon glyphicon-shopping-cart"></span> Add to cart<span className="caret"></span></a>
          <ul className="dropdown-menu dropdown-cart" role="menu">
              <li>
                  <span className="item">
                    <span className="item-left">
                        <span className="item-info">
                            <span>Item name</span>
                        </span>
                    </span>
                </span>
              </li>
          </ul>
        </li>
      </ul>
    </ul>
  </div>
</nav>
</div> 
    )

}
