import React, { Component } from 'react';

class LoginPage extends Component {
    state = {
        login: '',
        password: '',
        loginResult: true
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin = () => {
        const result = this.props.handleLogin(this.state.login, this.state.password);
        if(!result)
            this.setState({
                login: '',
                password: '',
                loginResult: false
            });
    }

    render()
    {
        return ( 
            <div>
                {!this.state.loginResult && <h3 style={{color: 'red'}}>Zły login lub hasło!</h3>}
                <label>
                    Login
                    <input  type="text"
                            name="login"
                            onChange={this.handleChange}
                            value={this.state.login} />
                </label>
                <br />
                <label>
                    Hasło
                    <input  type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password} />
                </label>
                <br />
                <button onClick={this.handleLogin}>Zaloguj się</button>
            </div>
        );
    }
}
 
export default LoginPage;