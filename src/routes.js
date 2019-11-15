import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth'
import Dash from './components/Dash'
import Form from './components/Form'
import Post from './components/Post'

export default (

    <Switch>
        <Route exact path='/' component={Auth}></Route>
        <Route path='/dash' component={Dash}></Route>
        <Route path='/post/:postid' component={Post}></Route>
        <Route path='/new' component={Form}></Route>
    </Switch>


)