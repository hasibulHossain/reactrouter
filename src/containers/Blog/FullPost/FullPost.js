import React, { Component } from 'react';

import './FullPost.css';
import { deletePostRequest, getSinglePost } from '../../../request';

class FullPost extends Component {
    state = {
        loadedSelectedPost: null,
        isLoaded: false
    }

    componentDidMount() {
        this.getPost()
        
    }

    componentDidUpdate() {
        this.getPost()
    }   

    getPost = () => {
        if(this.props.match.params.id) { //this.props.match.params.id & this.props.match.params.id both are same, just different way to handle id.
            getSinglePost(this.props.match.params.id).then(
                data => {
                    if(!this.state.loadedSelectedPost ||
                    (this.state.loadedSelectedPost &&
                    +this.props.match.params.id !== this.state.loadedSelectedPost.id)) {
                        this.setState({loadedSelectedPost: data, isLoaded: true})
                    }
                }
            ).catch(err => {
                console.log(err)
            })
        }
    }

    deletePostHandler = () => {
        if(this.props.match.params.id) {
            deletePostRequest(this.props.match.params.id).then(data => {
                console.log(data)
            }).catch(err => {
                console.log(err)
            })
        }
        
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if(this.props.match.params.id) {
            post = <span style={{textAlign: 'center', display: 'block'}}>Loading...</span>
        }

        if(this.state.loadedSelectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedSelectedPost.title}</h1>
                    <p>{this.state.loadedSelectedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;