import React from 'react';
import './Post.css';
import {withRouter} from 'react-router-dom';
import Aux from '../HOC/Aux';

const post = (props) => {
    return (
        <Aux>
        {/* <Link to={props.match.url + '/about'}>click</Link> */}
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
        </Aux>
    );
}

export default withRouter(post);