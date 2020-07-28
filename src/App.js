import React from 'react';
import axios from 'axios';
import TableList from './components/TableList';
import Form from './components/Form';
import Sidebar from './components/Sidebar';
import Help from './components/Help';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Alert from './components/Alert';
import BasicTable from './components/BasicTable';
import Routes from './components/Routes';

const App = () => {

  return (
    <div className="App">
       <Routes />
    </div>
  )
}

export default App;
