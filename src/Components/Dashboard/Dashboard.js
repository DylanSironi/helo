import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            myPosts: true,
            posts: [],
            loading: true
        };
        this.grabPosts = this.grabPosts.bind(this);
        this.reset = this.reset.bind(this);
    }
    grabPosts() {
        let { search, myPosts } = this.state;
        let url = `/api/v1/posts/${this.props.user.userId}`;
        if (myPosts && !search) {
            url += '?mine=true';
        } else if (!myPosts && search) {
            url += `?search=${search}`;
        } else if (myPosts && search) {
            url += `?mine=true&search=${search}`;
        }
        axios.get(url)
            .then(res => {
                setTimeout(_ => this.setState({ posts: res.data, loading: false }), 500)
            })
    }
    reset() {
        let { myPosts } = this.state;
        let url = `/api/v1/posts/${this.props.user.userId}`;
        if (myPosts) {
            url += '?mine=true';
        }
        axios.get(url)
            .then(res => {
                this.setState({ posts: res.data, loading: false, search: '' })
            })
    }
    render() {
        return (
            <div className='Dashboard'>
                <div >
                    <div >
                        <input value={this.state.search} onChange={e => this.setState({ search: e.target.value })} placeholder='Search by Title' />
                        <button onClick={this.grabPosts}>Search</button>
                        <button onClick={this.reset} >Reset</button>
                    </div>
                    <div>
                        <p>My Posts</p>
                        <input checked={this.state.myPosts} onChange={_ => this.setState({ myPosts: !this.state.myPosts }, this.grabPosts)} type='checkbox' />
                    </div>
                </div>
                <div >
                    {!this.state.loading
                        ?
                        this.posts
                        :
                        <div className='load_box'>
                            <div className='load_background'></div>
                            <div className='load'></div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      userId: state.userId
    }
  }
  export default connect(mapStateToProps)(Dashboard);