import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {v4 as uuidV4} from 'uuid';
import './Posts.css';

import getResponse from '../../../request';
import Post from '../../../components/Post/Post';
import Aux from '../../../components/HOC/Aux';
import FullPost from '../FullPost/FullPost';
import About from '../About';

class Posts extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        getResponse().then(data => {
            const posts = data.slice(0, 4);
            const updatePost = posts.map(item => {
                return {...item, author: 'hasib'}
            });

            this.setState({posts: updatePost})
        }).catch(err => {
            console.log(err)
        })
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: '/' + id});
        this.props.history.push(`${this.props.match.url}/` + id)
    }

    render () {
        console.log(this.props)
        console.log(window.history)
        const posts = this.state.posts.map(item => (
            // <Link to={'/' + item.id} key={uuidV4()}>
                <Post
                key={uuidV4()}
                title={item.title}
                author={item.author}               
                clicked={() => this.postSelectedHandler(item.id)} />
            // </Link>
        ))

        return (
            <Aux>
                <section className="Posts">
                    {/* <h1 style={{fontSize: '50px', display: 'block'}}>Start from 198</h1> */}
                    {posts}
                </section>

                <Switch>
                    <Route path={this.props.match.url + '/about'} component={About} />
                    <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                </Switch>
                
                {/* <section className="sections section-1"><h1 className="h1">SECTION ONE</h1></section>
                <section className="sections section-2"><h1 className="h1">SECTION TWO</h1></section>
                <section className="sections section-3"><h1 className="h1">SECTION THREE</h1></section>
                <section className="sections section-4"><h1 className="h1">SECTION FOUR</h1></section> */}
            </Aux>
        );
    }
}

export default Posts;