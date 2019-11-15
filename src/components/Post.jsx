import React from 'react'
import axios from 'axios'

class Post extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            editing: false,
            editObj: {
                title: '',
                image: '',
                content: ''
            }
        }
    }

    toggleEdit(){
        this.setState({
            editing: !this.state.editing
        })
    }

    saveEditButton(){
        const id = this.props.posts.title
        // console.log(id)
        axios.put(`/api/post/?id=${id}`, this.state.editObj).then(result => {
            console.log(result)
        })

        this.setState({
            editing: false
        })
        this.props.getAllPosts()
    }

    handleChange1(e){
        // console.log(e.target.value)
        this.setState({
            editObj: {...this.state.editObj,
                title: e.target.value
            }
        })
    }

    handleChange2(e){
        this.setState({
            editObj: {...this.state.editObj,
                image: e.target.value
            }
        })
    }

    handleChange3(e){
        this.setState({
            editObj: {...this.state.editObj,
                content: e.target.value
            }
        })
    }

    render(){
        // const {id} = this.props.posts.username
        // console.log(this.props.posts.username)
        return(
            <div className='posts'>

            <div className="left">

        
        {!this.state.editing ?
        <h1>{this.props.posts.title}</h1>
        : <input 
        placeholder='insert new title here!'
        onChange={(e) => this.handleChange1(e)}
        type="text"/>}
        
        {!this.state.editing ?
        <img src={this.props.posts.img} alt="{this.props.posts.title"/>
        : <input 
        placeholder='insert image url'
        onChange={(e) => this.handleChange2(e)}
        type="text"/>}
        
        {!this.state.editing ?
        <p>{this.props.posts.content}</p>
        : <textarea 
        placeholder='insert content here!'
        onChange={(e) => this.handleChange3(e)}
        type="text"/>}
        
        <div className="author">

        <img src={this.props.posts.profile_pic} alt=""/>
        <p>{this.props.posts.username}</p>
        </div>
            </div>


                <div className="right">

            <button
            onClick={()=> this.toggleEdit()}
            ><span>EDIT</span></button>
                <h1>{this.state.editing ? 'editing' : 'not editing'}</h1>

                {this.state.editing && 
                <button
                onClick={()=> this.saveEditButton()}
                ><span>save edits</span></button>}

                </div>


            </div>
        )
    }
}

export default Post