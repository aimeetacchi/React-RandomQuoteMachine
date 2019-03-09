import React, { Component } from 'react'
import Button from './Button';
import Quote from './Quote';

class MainContainer extends Component {

  render() {

    let quotes = [
        "'May the Force be with you' - Star Wars",
        "'E.T. phone home.' - E.T. The Extra-Terrestrial",
        "'I'll be back.' - The Terminator",
        "'My precious.' - The Lord of the Rings: Two Towers",
        "'Hasta la vista, baby.' -Terminator 2: Judgment Day",
        "'Houston, we have a problem.' - Apollo 13",
        "'I'm king of the world!' - Titanic, 1997",
        "'Frankly, my dear, I don't give a damn.' - Gone with the Wind, 1939",
        "'I'm gonna make him an offer he can't refuse.' - The Godfather, 1972",
        "'Go ahead, make my day.' - Sudden Impact, 1983",
        "'There's no place like home.' - The Wizard of Oz, 1939",
        "'You're gonna need a bigger boat.' - Jaws, 1975"
    ];

    return (
      <div id="author" className="quote">
            <Quote/>
            <Button quotes={quotes} name={'New Quote >'} />
      </div>
    )
  }
}

export default MainContainer;
