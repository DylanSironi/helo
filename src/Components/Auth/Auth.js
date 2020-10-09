import React, { Component } from 'react';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            authView: false
        }
    }

    // componentDidMount(){
    //     if(this.props.user.username){
    //         this.props.history.push('/dashboard');
    //     }
    // }

    // handleInput = (event) => {
    //     this.setState({[event.target.name]: event.target.value})
    // }

    // handleToggle = () => {
    //     this.setState({authView: !this.state.authView})
    // }

    render() {
        return (
            <div>
                Auth
            </div>
        )
    }
}
export default Auth