import React from 'react'
import { Link } from 'react-router-dom'

const Alert = () => {
    return (
    <div>

      <form action="#" class="pt-2">
        <div className="form-inline" style={{marginBottom: '10px'}}>
          <label for="Product" style={{marginLeft: '10px'}}>Products</label>
          <input type="Text" className="form-control" id="Search" name="Search" style={{marginLeft: '450px', width: '400px', height: '30px'}} placeholder="Search" />
          
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" style={{border: '1px solid black', borderRadius: '0', backgroundColor: 'white', marginLeft: '10px'}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Create New
            </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">New Purchased Product</a>
                <a className="dropdown-item" href="#">New Manufactured Product</a>
              </div>
           </div>

           <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" style={{border: '1px solid black', borderRadius: '0', backgroundColor: 'white'}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Bulk Manage
            </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Import new products</a>
                <a className="dropdown-item" href="#">Update existing products</a>
                <a className="dropdown-item" href="#">Export products</a>
              </div>
           </div>

          <button className="btn" style={{border: '1px solid black', marginLeft: '15px'}} >Help</button>
          </div>
      </form>

      <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{backgroundColor: '#1c4561', marginLeft: '10px'}} >
        <p style={{color: '#ffffff'}}>Bring in your products and stock levels.</p>
        <p style={{color: '#ffffff'}}>All of your products will be managed here. Manually create products or import products using a spreadsheet. You can also sync products from your eCommerce store.</p>
        <button class="btn" style={{backgroundColor: '#63bf1b', color: '#ffffff', padding: '10px 15px'}} >
          <Link to="/Form">
            <a href="subh.html" style={{color: '#ffffff', textDecoration: 'none'}}>Add a Product</a>
          </Link>
        </button>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" style={{color: '#ffffff'}}>
          <span aria-hidden="true" >&times;</span>
        </button>
      </div>
    </div>    
    )
}

export default Alert;