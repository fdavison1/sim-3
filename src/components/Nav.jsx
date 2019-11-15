import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <nav>

            {/* {this.props.location.pathname('/') && test } */}


            <div className="profile">
            <h2>Nav</h2>
            <h2>username: {this.props.username}</h2>
            
            
            <div className="pic">

            <h2>profile pic:</h2>
            <img src={this.props.profile_pic} alt=""/>
            </div>
                </div>

            <Link to='/dash'>
            <button>home</button>
            </Link>

            <Link to='/new'>
            <button>new post</button>
            </Link>

            <Link to='/'>
            <button>logout</button>
            </Link>

            <hr/>

            </nav>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Nav)