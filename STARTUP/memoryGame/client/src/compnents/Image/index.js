import React, { Component } from 'react';
import './image.css';
const defaultSrc = 'http://myfirstchat.com/bookcity2/covers9/f9e6f8d44613a684b901c11274dd4a4648037942.jpg';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { url: '', style: {} };
    this.openImage = this.openImage.bind(this);
  }
  componentWillMount() {
    this.setState({ url: defaultSrc });
  }

  openImage({ target }) {
    if (target.src === defaultSrc) {
      target.src = this.props.imageUrl;
      this.props.checkGame(target);
      // let style = {
      //   transitionDuration: '1s',
      //   transform: 'rotate3d(0,1,0,180deg)'
      // };
      this.setState({ url: [this.props.imageUrl] });
    }
  }

  render() {
    let { url, style } = this.state;
    return (
      <div className="imageContainer" style={style}>
        <img src={url} onClick={this.openImage} className="image" />
      </div>
    );
  }
}

export default Image;
