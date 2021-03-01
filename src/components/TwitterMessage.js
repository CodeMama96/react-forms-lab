import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value //properly updating state, async
    })
  }

  render() {
    // console.log("props", this.props)
    // console.log("state", this.state) //render is final funtion before anything happens, always up to date
    return (
      <div>
        <strong>Your message:</strong>
        <input
        value={this.state.message}
        onChange={this.handleChange}
        type="text" 
        name="message" 
        id="message" /><br/><br/>

        {this.props.maxChars - this.state.message.length}

      </div>
    );
  }
}

export default TwitterMessage;
