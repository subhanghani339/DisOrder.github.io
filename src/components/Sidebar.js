import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    return (
        <div>    
         {/* <h5>
            <img id="ember1744" src="https://d3h6ue1fvxa32i.cloudfront.net/assets/logo/tradegecko-mark-f5fb5aa8e97faa1384396c783bff6faa788f24d997fb0764b26caf2cdff1b94b.svg" className="brand-mark ember-view" />
            <span id="subhan" style={{margin: '0px 0px 0px 4px'}}>
                DIS<b>Order</b>
            </span>
        </h5> */}

        <nav className="sidebar">
            <div className="text">DISOrder</div>
            <ul>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <Link to="/BasicTable">
                <li>
                  <a href="#" className="feat-btn">Inventory
                    <span className="fas fa-caret-down first"></span>
                  </a>
                  <ul className="feat-show">
                    <li><a href="">Products</a></li>
                    <li><a href="">Variants</a></li>
                    <li><a href="">Batch</a></li>
                    <li><a href="">Price List</a></li>
                  </ul>
                </li>
              </Link>
              <li>
                <a href="#" className="serv-btn">Relationship
                  <span className="fas fa-caret-down second"></span>
                </a>
                <ul className="serv-show">
                  <li><a href="">Companies</a></li>
                  <li><a href="">Customer Group</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="serv-btn">Stock Control
                  <span className="fas fa-caret-down second"></span>
                </a>
                <ul className="serv-show">
                  <li><a href="">App Design</a></li>
                  <li><a href="">Web Design</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="serv-btn">Intelligence
                  <span className="fas fa-caret-down second"></span>
                </a>
                <ul className="serv-show">
                  <li><a href="">App Design</a></li>
                  <li><a href="">Web Design</a></li>
                </ul>
              </li>
              <li style={{marginTop: '240px'}}>
                <a href="#" className="serv-btn">Settings
                  <span className="fas fa-caret-down second"></span>
                </a>
                <ul className="serv-show">
                  <li><a href="">App Design</a></li>
                  <li><a href="">Web Design</a></li>
                </ul>
              </li>
              <li>
                <a href="#">User</a>
              </li>
              </ul>
          </nav>    
    </div>
    )
}

export default Sidebar;