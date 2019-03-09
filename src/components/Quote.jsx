import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    return (
      <React.Fragment>
       <p id="new-quote">Click the 'New Quote' button below to see a random quote from a movie</p>
        <div className="border"></div>
      </React.Fragment>
    )
  }
}
