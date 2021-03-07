import React, { Component } from 'react';
<<<<<<< HEAD
import DevList from './DevList';
=======
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
>>>>>>> creating-home-page

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <header>
          <span class="logo">WRPT 2 GITHUB GROUP</span>
          <nav>
              <ul class="nav-links">
                  <li>Home</li>
                  <li>Coming Soon</li>
                  <li>Spacejam.com</li>
              </ul>
          </nav>
        </header>
        <main>
          <section>
            <DevList />
          </section>
        </main>
          <footer>
              <div class="copyright">Produced By Devmountain Students</div>
          </footer>    
      </div>
=======
      <>
        <Header />
        <NavBar />
      </>
>>>>>>> creating-home-page
    );
  }
}
