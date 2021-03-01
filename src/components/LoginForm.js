import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''

    };
  }


  handleChange = event => {
    
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value //properly updating state, async
    })
  }

  handleSubmit = event =>{
    console.log('login')
    event.preventDefault();
    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }
  render() {
    // console.log("login-props", this.props)
    // console.log("login-state", this.state) //render is final funtion before anything happens, always up to date
    
    return (
      <form onSubmit= {this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password" 
              value={this.state.password}
              onChange={this.handleChange}

            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
