import React, { Component } from 'react';
// import logo from './logo.svg';
import Register from './Mobile/register'
import './App.css';
// import { width } from 'window-size';
import Particles from 'react-particles-js';


const particlesStyle = {
  position:'absolute',
  width: '100%',
  height:'100%'
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles 
              className="particles"
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
                      color: "#03A9F4",
            				}
                  },
                  shap:{
                    type:'star'
                  }
            		}
            	}}
              style={particlesStyle}
            />
          <div className="form"
          >
          <Register/>
          </div>
      </div>
    );
  }
}

export default App;
