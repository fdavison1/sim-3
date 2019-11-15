import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component{
    constructor(){
        super()

        this.state = {

        }
    }
    render(){
        return(
            <div>

            {/* {this.props.location.pathname('/') && test } */}


            <h2>Nav</h2>


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

            </div>
        )
    }
}

export default Nav