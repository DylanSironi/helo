import React, { Component } from 'react';
// import { Link,} from "react-router-dom";

class Nav extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className='nav'>
                <img src='https://robohash.org/7IC.png?set=set2&size=150x150' alt='robot' />
                <button >Home</button>
                <button>New Post</button>
                <button>Logout</button>
            </div>
        )
    }
}
export default Nav