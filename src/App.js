import React, { Component } from 'react';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import PhotoGallery from './components/PhotoGallery';
import DevList from './components/DevList';
import Copyright from './components/Copyright';

import TicTacToe from './components/TicTacToe/TicTacToe'

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Logo />
          <NavBar />
        </header>
        <main>
          <section>
            <DevList />
          </section>
          <section>
            <PhotoGallery />
          </section>
          <section>
            <TicTacToe />
          </section>
        </main>
        <footer>
          <Copyright />
        </footer>
      </div>
    );
  }
}