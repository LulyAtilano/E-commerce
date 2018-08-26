import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from './components/Header';
import Footer from './components/Footer';
//import Parallax from './components/Parallax';
import { Carousel, Parallax } from 'react-materialize';
import MercadoLibreApp from './app';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="parallax-header" className="row"> 
          <Parallax imageSrc="https://www.saludterapia.com/images/saludterapia/usersn/13450/thumbnail/e7881-5a254dd306c722.89799979-910x457.jpeg"/>
        </div>
        <div id="carousel" className="row"> 
          <Carousel 
            options={{ fullWidth: true }} 
            images={[ 
            'https://cdn.shopify.com/s/files/1/0785/1987/collections/clearance-items_large.png?v=1516213924',
            'https://d1m6qo1ndegqmm.cloudfront.net/discount-offers.png',
            'https://i2.wp.com/www.ebates.com/blog/wp-content/uploads/2015/06/header1.png?ssl=1'
          ]} />
        </div>
        <div className="row"> <MercadoLibreApp /> </div>
        <div id="parallax-oils" className="row"> 
          <Parallax imageSrc="https://caminosaludable.files.wordpress.com/2008/11/aromaterapia1.png?w=640" />
        </div>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));