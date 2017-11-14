import React, { Component } from 'react';
import './image.css';
const defaultSrc = 'http://myfirstchat.com/bookcity2/covers9/f9e6f8d44613a684b901c11274dd4a4648037942.jpg';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { url: defaultSrc };
    this.openImage = this.openImage.bind(this);
  }

  openImage({ target }) {
    if (target.src === defaultSrc) {
      target.src = this.props.imageUrl;
      this.props.checkGame(target);
      this.setState({ url: [this.props.imageUrl] });
    }
  }

  render() {
    let { url } = this.state;
    let { imageUrl } = this.props;
    return (
      <div class="imageContainer">
        <img src={url} onClick={this.openImage} className="image" />
      </div>
    );
  }
}

export default Image;
