import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

class Nav extends Component {
    // constructor(props){
    // super(props)
    // }
    render() {
        console.log(this.props)
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
function mapStateToProps(state) {
    return {
        username: state.username,
        picture: state.profilePicture
    }
}
export default connect(mapStateToProps)(Nav);
// console.log(props)














// import React from 'react'
// import { withRouter, Link } from 'react-router-dom'
// import { connect } from 'react-redux'

// import { logout } from '../../ducks/reducer'

// // import homeLogo from './home_logo.png'
// // import newLogo from './new_logo.png'
// // import logoutLogo from './shut_down.png'
// // import './Nav.css'

// function Nav(props) {
//     if (props.location.pathname !== '/') {
//         console.log('nav', props)
//         return (
//             <div className='nav'>
//                 <img src='https://robohash.org/7IC.png?set=set2&size=150x150' alt='robot' />
//                 <button ><Link to='/dashboard'>Home</Link></button>
//                 <button><Link to='/new'>New Post</Link></button>
//                 <button><Link to='/'>Logout</Link></button>
//             </div>
//         )
//     } else {
//         return null
//     }
// }
// function mapStateToProps(state) {
//     return state
// }
// export default withRouter(connect(mapStateToProps, { logout })(Nav))
