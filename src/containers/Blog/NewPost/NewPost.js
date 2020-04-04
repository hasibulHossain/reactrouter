import React, { Component } from 'react';
import {addPostRequest} from '../../../components/request/request';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Hasib'
    }

    addPostHandler = () => {
        const postData = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }

        addPostRequest(postData).then(data => {
            this.props.history.replace({pathname: '/posts'})
            console.log(this.props)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })

    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input required type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addPostHandler} >Add Post</button>
            </div>
        );
    }
}

export default NewPost;