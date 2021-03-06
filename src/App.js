import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <NavBar />
      </>
    );
  }
}
