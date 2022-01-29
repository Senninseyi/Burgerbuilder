import React, {Component} from 'react';
import { connect } from 'react-redux';
import Aux from '../../auxillary/auxillary.js';
import SideDrawer from '../navigation/sideDrawer/sideDrawer.js';
import Toolbar from '../navigation/toolbar/toolbar.js';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }


    render(){
        return(
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated} 
                    drawerToggleClick={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated} 
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}/>
                <main className="mt-16">{this.props.children}</main>
            </Aux>
        )
    }
} 

const mapStateToProps = state =>{
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default (connect(mapStateToProps,null))(Layout)