import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Blog.css';

import Aux from '../../components/HOC/Aux';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncCmp from '../../components/HOC/asyncCmp';
// import FullPost from './FullPost/FullPost';
// import About from './About';

const AsyncNewPost = asyncCmp(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: false
    }

    render () {
        return (
            <Aux>
                <div className="Blog">
                    <Switch>
                        {/* <Route path="/:id" component={FullPost} /> */}
                        <Route path="/new-post" component={AsyncNewPost} />                                       
                        <Route path="/posts" component={Posts} />
                        
                        <Redirect from="/" to="/posts" />
                        <Route render={() => <h1>page not found</h1>} />
                   </Switch>
                </div>
            </Aux>
        );
    }
}

// const section3 = document.querySelector('.section-3');
// const section3Observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         console.log(entry)
//     })
// })

// section3Observer.observe(section3)

export default Blog;