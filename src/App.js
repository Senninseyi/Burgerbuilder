import React, {Component} from 'react';
import Layout from './burgerbuilder/components/layout/layout';
import './App.css';
import BurgerBuilder from './burgerbuilder/containers/burgerbuilder/burgerbuilder';
// import Blog from './blogpost/containers/Blog/Blog.js';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Checkout from './burgerbuilder/containers/checkout/checkout';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/" exact component={BurgerBuilder}/>
            </Switch>
          </Layout>
          {/* <Blog/> */}
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
