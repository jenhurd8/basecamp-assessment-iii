import React, { Component } from 'react';

import './App.css';

class Hello extends Component{
  render(){
  return (
  <div className="Hello">
  <h1>Hello World! This is my first react Component!</h1>
  <div className="testButton">
  <button>This is my test button</button>
  </div>
  <div className="classList">
  <p></p>
  <li id="heading">Class list</li>
  <li>Jen</li>
  <li>Michael</li>
  <li>Destiny</li>
  <p></p>
  <img src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,w_305/v1504538442/216_jp4mjo.jpg" alt="Chicago downtown street at night">
  </img>
  <div className="paragraph">
  Lorem ipsum dolor amet ramps intelligentsia deep v fingerstache salvia meditation. Chia edison bulb poutine, vinyl cloud bread keytar pok pok health goth crucifix helvetica schlitz air plant post-ironic scenester mustache. Chillwave bushwick mumblecore adaptogen hot chicken. Iceland salvia craft beer XOXO tumeric letterpress bespoke. Normcore food truck cornhole la croix blog. Salvia ethical everyday carry schlitz master cleanse PBR&B crucifix actually truffaut man bun vape ugh. Selvage waistcoat DIY af crucifix vape.
  </div>
    </div>
    </div>
  );
}
}
export default Hello;
