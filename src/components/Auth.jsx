import React from 'react'
import axios from 'axios'
// import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {nav} from '../ducks/reducer'

class Auth extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }


    register = () => {
        const {username, password} = this.state
        axios.post('auth/register', {username, password})
        .then(res => {
            console.log(res.data.user)
        })
    }
    
    login = () => {
        const {username, password} = this.state
        // console.log(username, password)
        axios.post('auth/login', {username, password})
        .then(res => {
            this.props.history.push('/dash')
            this.props.nav(res.data.user)
        })
    }

  


    handleUsername(e){
        this.setState({
            username: e
        })
    }
    handlePassword(e){
        this.setState({
            password: e
        })
    }



    render() {
        return (
            <div>




                <h1>Auth</h1>

                <h2>username:</h2>
                <input 
                onChange={(e)=> this.handleUsername(e.target.value)}
                type="text"/>
                
                <h2>password:</h2>
                <input 
                onChange={(e)=> this.handlePassword(e.target.value)}
                type="text"/>

                <br/>
                <br/>

                <button
                onClick={()=> this.register()}>register</button>
                
                
                {/* <Link to='/dash'> */}
                <button
                onClick={()=> this.login()}
                >login</button>
                {/* </Link> */}


            </div>
        )
    }
}

// function mapStateToProps(state){
//     state
// }

export default connect(null, {nav})(Auth)