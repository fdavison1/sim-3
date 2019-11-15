import React from 'react'

class Post extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        return(
            <div className='posts'>

        <h1>{this.props.posts.title}</h1>
        <img src={this.props.posts.img} alt="{this.props.posts.title"/>
        <p>{this.props.posts.content}</p>
        <p>{this.props.posts.username}</p>
        <img src={this.props.posts.profile_pic} alt=""/>




            </div>
        )
    }
}

export default Post