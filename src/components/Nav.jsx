import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {logout} from '../ducks/reducer'


class Nav extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            display: true
        }
    }

    // componentDidMount(){
    //     console.log(this.props)
    // }

    logout = () => {
        axios.delete('/auth/logout').then(res => {
            // return this.props.logout()
            return console.log('logged out')
            // this.logout2()
            
        })
    }

    // logout2(){
        // this.props.logout()
    // }

    render(){
        return(
            <nav>

            {/* {this.props.location.pathname('/') && test } */}

            {/* {this.state.display && */}
            {/* <div> */}

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
            <button
            onClick={this.logout()}
            >logout</button>
            </Link>
            
            {/* </div>} */}

            <hr/>

            </nav>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {logout})(Nav)