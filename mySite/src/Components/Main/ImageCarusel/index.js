import React, {Component} from 'react';
import './ImageCarusel.css';
const img1Src = "https://images.unsplash.com/photo-1445384763658-0400939829cd?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
const img2Src = "https://images.unsplash.com/photo-1500984932646-e94f38512bc9?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
const img3Src = "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=800&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
const img4Src = "https://images.unsplash.com/photo-1501116518234-f32f28802bd1?auto=format&fit=crop&w=648&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
const img5Src = "https://images.unsplash.com/photo-1489659831163-682b5af42225?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"



class ImageCarusel extends Component {

  constructor() {
    super()
    this.state = {
      src: img1Src
    }
    this.updateImg = this
      .updateImg
      .bind(this)
  }

  updateImg(src) {
    this.setState({src})
  }
  render() {
    let {src} = this.state
    return (
      <div className="caruselContainer">
        <div className="carusel">
          <img src={src} alt=""/>
          <img src={img1Src} alt="" onClick={() => this.updateImg(img1Src)}/>
          <img src={img2Src} alt="" onClick={() => this.updateImg(img2Src)}/>
          <img src={img3Src} alt="" onClick={() => this.updateImg(img3Src)}/>
          <img src={img4Src} alt="" onClick={() => this.updateImg(img4Src)}/>
          <img src={img5Src} alt="" onClick={() => this.updateImg(img5Src)}/>
          
        </div>
        <h2>רוני יהב- התקשרו 0542226958</h2>

      </div>
    )
  }

}

export default ImageCarusel;
