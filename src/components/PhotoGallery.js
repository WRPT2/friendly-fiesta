import React, { Component } from 'react';
import Photos from './Photos';

export default class PhotoGallery extends Component {
  render() {
    return (
      <div className="photo-gallery">
        <h2>Photo Gallery</h2>
        <p>Add a URL and a caption to the Gallery below</p>
        <p>I am going to work on making a reactive grid photo gallery here!</p>
        <input placeholder="Add your URL Here!" />
        <input placeholder="Add a Caption Here!" />
        <Photos />
      </div>
    );
  }
}
