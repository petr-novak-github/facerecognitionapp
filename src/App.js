import React from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';



const app = new Clarifai.App({
  apiKey: 'f92f6ff0c1454123966153fb747a51e2'
 });

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800

      }
    }
    
      }
    }
  

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box: {}  
  }
  }

displayFaceBox = (box) => {

  this.setState({box: box});
  console.log(box);
}

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    console.log (width, height);
return  {
leftCol: clarifaiFace.left_col * width,
topRow: clarifaiFace.top_row * height,
rightCol: width - (clarifaiFace.right_col * width),
bottom: height - (clarifaiFace.bottom_row * height)
}

  }


  onInputChange = (event) => {

    console.log (event.target.value);
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click');
    this.setState({ imageUrl: this.state.input});

    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
     this.state.input)
     .then(response =>this.displayFaceBox(this.calculateFaceLocation(response))
     .catch(err => console.log(err))
  );

  }
  
render () {

  return (
    <div className="App">
      <Particles className='particles' params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} /> 
    </div>
  );
}
}
export default App;
