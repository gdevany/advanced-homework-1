// import React, { Component } from 'react';
import React from 'react';

// import logo from './logo.svg';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
// import Carousel from './components/Carousel';


function App(props) {
  // console value of picStyle
  console.log(props.picStyle);
  var productDiv = props.products.map((p) => {
    return <ProductDetail key={p.id} product={p} picStyle={props.picStyle}/>
  })

  return (
    <div className="App">

      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              <Header alterPic={props.alterPic} />
          </div>
      </nav>

      <div className="container">
          <div className="row">
              <div className="col-md-3">
                  <p className="lead">Shop Name</p>
                  <div className="list-group">
                      <a href="#" className="list-group-item">Category 1</a>
                      <a href="#" className="list-group-item">Category 2</a>
                      <a href="#" className="list-group-item">Category 3</a>
                  </div>
              </div>
              <div className="col-md-9">
                  <div className="row">
                      {productDiv}
                  </div>
                  <div className="col-sm-4 col-lg-4 col-md-4">
                      <h4><a href="#">Like this template?</a>
                      </h4>
                      <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                      <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                  </div>
              </div>
          </div>
      </div>

      <div className="container">
          <hr/>
          <Footer />
      </div>

    </div>
  );
}

export default App;
