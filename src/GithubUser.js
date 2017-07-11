import React, { Component } from 'react'

class GithubUser extends Component {
  constructor(props){
    super(props)

    this.fetchUserData()
  }

  fetchUserData = () => {
    fetch(`https:api.github.com/users/${this.props.match.params.username}`)
      .then(data => data.json())
      .then(user => console.log(user))
  }

  render() {
    return (
      <p>something </p>
    )
  }
}

export default GithubUser