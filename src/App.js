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
      imageUrl:''  
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
      Clarifai.COLOR_MODEL,
     "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
    }
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
      <FaceRecognition imageUrl={this.state.imageUrl} /> 
    </div>
  );
}
}
export default App;
