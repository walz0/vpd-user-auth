import React, { Component } from 'react';
import Riot from './Riot';
import "./Login.css";

export default class Login extends Component {
    render() {
        return (
            <div className="Login">
                Sign In
                <Riot /> 
            </div>
        )
    }
}
