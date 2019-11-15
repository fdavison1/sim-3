import React from 'react'

class Auth extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div>




                <h1>Auth</h1>

                <h2>username:</h2>
                <input type="text"/>
                
                <h2>password:</h2>
                <input type="text"/>

                <br/>
                <br/>

                <button>login</button>
                <button>register</button>


            </div>
        )
    }
}

export default Auth