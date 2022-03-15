import React, {Component} from 'react';
import Layout from './burgerbuilder/components/layout/layout';
import './App.css';
import BurgerBuilder from './burgerbuilder/containers/burgerbuilder/burgerbuilder';
import { Route, Switch, withRouter} from "react-router-dom"
import Checkout from './burgerbuilder/containers/checkout/checkout';
import Orders from './burgerbuilder/containers/orders/orders';
import Auth from './burgerbuilder/containers/auth/auth';
import Logout from './burgerbuilder/containers/auth/logout/logout';
import { connect } from 'react-redux';

import * as actions from './store/actions/index'
import { Redirect } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignUp()
  }

  render(){

    let routes = (
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to='/'/>
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to='/'/>
        </Switch>
      )
    }

    return(
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps))(App));
