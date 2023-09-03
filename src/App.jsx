window.global ||= window;
import React, {Component} from 'react';
import {Navbar, Logo, Imagebox, Imagelinkform, Rank} from './Components'
import styles from './App.module.css';
import Particles from 'react-particles';
import  Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '#'
 });


const classes = styles; 

class App extends Component {
  
constructor(){
  super();
  this.state ={
    input:'',
    inputURL: '',
    box : {},
  }
};

calulateFaceLocation = (response) => {
  const face = response.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage')
  const width = Number(image.width);
  console.log(width)
  const height = Number(image.height);
 
  return({
    leftCol: face.left_col *width,
    topRow: face.top_row * height,
    rightCol : width -(face.right_col*width),
    bottomRow: height - (face.bottom_row*height)
  });
};


captureFace =(box) =>{
  this.setState({box : box});
}



onInputChange = (event) => {
  this.setState({input:event.target.value});
};

onButtonSubmit =() => {
  this.setState({inputURL: this.state.input});
  
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  .then((response) => (this.captureFace(this.calulateFaceLocation(response))))
  .catch((err) => (console.log(err)));
    
  console.log(this.state.box);
};
  
  
  render(){
  return(
    <div >
<Particles  className={classes.particles}/>
      <Navbar />
      <div className={classes.center}>
      <Logo />
      <Rank  />
      
      <Imagelinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
      < Imagebox ImageUrl={this.state.inputURL}  box={this.state.box}/>
      
    </div>
  )}
};


export default App;