import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from  '../components/Home/Home';
import Dummy from '../components/Dummy/Dummy';

class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
        <Dummy />
      </Layout>
    );
  }
}

export default App;
