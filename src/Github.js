import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import GithubUser from './GithubUser'
import './Github.css'

class Github extends Component {
  state = {
    username: "",
  }

  handleChange = (ev) => {
    this.setState({
      username: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({usename: ''})
    this.props.history.push(`/github/${this.state.username}`)
  }

  render() {
    return (
      <div className="github">
        <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo"/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder="Search for a username" 
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>  
          <div>
            <button>Look up GitHub user</button>
          </div>
        </form>  
        <Route exact path="/github" render={() => <h3>Please enter a username to search on Github</h3>} />
        <Route path="/github/:username" component={GithubUser} />
      </div>
    )
  }
}

export default Github