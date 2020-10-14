import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';


class Nav extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className='nav'>
                <img src='https://robohash.org/7IC.png?set=set2&size=150x150' alt='robot' />
                <button ><Link to='/dashboard'>Home</Link></button>
                <button><Link to='/new'>New Post</Link></button>
                <button><Link to='/'>Logout</Link></button>
            </div>
        )
    }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Nav);