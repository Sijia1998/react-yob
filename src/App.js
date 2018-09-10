import React, { Component } from 'react';
import logo from './logo.svg';
import Register from './Mobile/register'
import './App.css';
import { width } from 'window-size';
import Particles from 'react-particles-js';

const divStyle = {
  width:'80%',
}
const particlesStyle = {
  position:'absolute',
  width: '100%',
}
class App extends Component {
  render() {
    
    return (
      <div className="App">
      <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 1
            				}
            			}
            		}
            	}}
              style={particlesStyle}
            />
          <div style={divStyle}
          >
          <Register/>
          </div>
      </div>
    );
  }
}

export default App;
