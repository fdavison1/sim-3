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

            <div className="left">

        <h1>{this.props.posts.title}</h1>
        <img src={this.props.posts.img} alt="{this.props.posts.title"/>
        <p>{this.props.posts.content}</p>
        
        
        <div className="author">

        <img src={this.props.posts.profile_pic} alt=""/>
        <p>{this.props.posts.username}</p>
        </div>
            </div>


                <div className="right">

            <button><span>EDIT</span></button>
                </div>


            </div>
        )
    }
}

export default Post