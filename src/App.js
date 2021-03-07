import React, { Component } from 'react';
import DevList from './DevList';

export default class App extends Component {
  render() {
    return (
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
    );
  }
}
