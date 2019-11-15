import React from 'react'
import Post from './Post'
import axios from 'axios'

class Dash extends React.Component{
    constructor(){
        super()

        this.state = {
            posts: []
        }
        this.getAllPosts = this.getAllPosts.bind(this)
    }


    componentDidMount(){
        this.getAllPosts()
    }

    

    getAllPosts(){
        axios.get('/api/posts').then(res=> {
            console.log(res.data)
            this.setState({
                posts: res.data
            })
        })
    }


    render(){
        return(
            <div>


            <h1>Dash</h1>
            <input type="text"/>
            <button>search</button>
            <button>reset</button>


            <div className="my-post">
            <h3>My Posts</h3><input type="checkbox"/>
            </div>

<hr/>


            {this.state.posts.map((post, i) => (

            <Post 
            key={i}
            posts={post}
            getAllPosts = {this.getAllPosts}
            />
            ))}

            </div>
        )
    }
}

export default Dash