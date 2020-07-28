/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Alert from './Alert';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i,
      img : <img src="/images/download.jpg" />
    });
  }
}

addProducts(5);

export default class BasicTable extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column'>
        <div>
          <Alert />
        </div>

        <div className="px-2">
          <BootstrapTable data={ products }>
              <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
              <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Supplier</TableHeaderColumn>
              <TableHeaderColumn dataField='img'>Product Type</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Brand</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Batch Tracked</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Available</TableHeaderColumn>
              <TableHeaderColumn dataField='price'>Status</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}
