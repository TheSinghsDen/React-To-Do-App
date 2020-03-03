import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends Component{
    state = {
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            res =>{
                console.log(res)
                this.setState({
                    posts:res.data.slice(1,10)
                })
            }
        )
    }
    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post =>{
                return(
                    <div className="card" key={post.id}>
                    <Link to={'/'+post.id}>
                    <div className="card-body">
                        <h4 className="card-title">{post.title}</h4>
                        <p className="card-text">{post.body}</p>
                    </div>
                    </Link>
                </div>
                )
            })
        ) : (
            <div className="text-center">No posts yet</div>
        )
        return(
            <div className="container">
                <h4 className="text-center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;