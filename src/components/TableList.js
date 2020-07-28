import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from "react-bootstrap";

const TableList = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPlayerData = async () => {
        try {
            const data = await axios.get(
            "https://nba-players.herokuapp.com/players-stats"
            )
            setLoading(true);
            console.log(data)
            setPlayers(data.data)
        }catch(e) {
            console.log(e)
        }
    };

    const columns  = [
        { datafield: "name", text: "Name"},
        { datafield: "team_acronym", text: "Supplier"},
        { datafield: "team_name", text: "Product Type"},
        { datafield: "team_name", text: "Brand"},
        { datafield: "team_name", text: "Batch Tracked"},
        { datafield: "team_name", text: "Available"},
        { datafield: "team_name", text: "Status"},
    ];

    useEffect(() => {
        getPlayerData();
    }, []);

    const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

  return (
    <div className="p-3">
       {/* {loading ? (<BootstrapTable 
        keyField="name"
        data={players}
        columns={columns}
        style={{color: "red"}}
        pagination={paginationFactory()}
        />) : (
            <ReactBootstrap.Spinner animation="border" />
        )} */}

<BootstrapTable data={ products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

export default TableList;