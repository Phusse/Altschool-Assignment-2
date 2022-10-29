import React from 'react'
import {Link} from 'react-router-dom';
import Cattoon from '../images/cattoon.png'

function Hero() {
  return (
        <div className="container">
          <div className="row">
            <div className="home__info padd__15">
              <h3 className="hello">Hello, my name is  
              <span className="name"> Chidubem Egbo</span></h3>
              <h3 className="my__profession">I'm a <span className="typing">web
                  designer</span></h3>
              <p>I'm a web developer with experience in HTML, CSS, Reactjs, C#, asp.net. I have experience in technical writing and open source contribution. Feel free to hire...</p>
              <Link to="/contact" className="btn hire__me">Hire Me</Link>
            </div>

            <div className="home__img padd__15">
              <img src={Cattoon} alt="Me" />
            </div>
          </div>
        </div>
  )
}

export default Hero