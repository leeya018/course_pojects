import 'antd/lib/carousel/style/css';
import React, {Component} from 'react';
import {Carousel} from 'antd';
import './ImageCarusel.css';

class ImageCarusel extends Component{

  constructor(){
    super()
    this.onChange= this.onChange.bind(this) 
  }
   onChange(a, b, c) {
    console.log(a, b, c);
  }
  render(){
    return (
      <Carousel afterChange={this.onChange}>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
        
    )
  }

}


export default ImageCarusel;





















// import React, {Component} from 'react';
// // import {Carousel} from 'antd';
// import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
// import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'
 
// import './ImageCarusel.css';

// export default () => {


//   return (
//     <div>
//     <AutoRotatingCarousel
//       label="Get started"
//       open
//     >
//       <Slide
//         media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
//         mediaBackgroundStyle={{ backgroundColor: red400 }}
//         contentStyle={{ backgroundColor: red600 }}
//         title="This is a very cool feature"
//         subtitle="Just using this will blow your mind."
//       />
//       <Slide
//         media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />}
//         mediaBackgroundStyle={{ backgroundColor: blue400 }}
//         contentStyle={{ backgroundColor: blue600 }}
//         title="Ever wanted to be popular?"
//         subtitle="Well just mix two colors and your are good to go!"
//       />
//       <Slide
//         media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />}
//         mediaBackgroundStyle={{ backgroundColor: green400 }}
//         contentStyle={{ backgroundColor: green600 }}
//         title="May the force be with you"
//         subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars universe."
//       />
//     </AutoRotatingCarousel>
//   </div>
//   )
// }

