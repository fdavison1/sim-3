import React from 'react'
import axios from 'axios'

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
        console.log(username, password)
        axios.post('auth/login', {username, password})
        .then(res => {
            console.log(res.data.user)
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
                <button
                onClick={()=> this.login()}
                >login</button>


            </div>
        )
    }
}

export default Auth