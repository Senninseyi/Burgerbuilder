import React, {Component} from 'react';
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
                <Toolbar drawerToggleClick={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}/>
                <main className="mt-16">{this.props.children}</main>
            </Aux>
        )
    }
} 

export default Layout