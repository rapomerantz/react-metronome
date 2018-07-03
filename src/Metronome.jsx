import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {
    constructor(props){
        super(props); 
        this.state = {
            playing: false,
            bpm: 120,
            count: 0,
            beatsPerMeasure: 4
        }
    }

    handleBpmChange = (event) => {
        console.log('in handleBpmChange');
        this.setState({
            bpm: event.target.value
        })   
    }

    togglePlaying = () => {
        
    }


  render() {
      const {bpm, playing} = this.state; 


    return (
        <div className="metronome">
        <div className="bpm-slider">
        <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm} 
            onChange={this.handleBpmChange}/>
        </div>
        <button>
          {playing ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

export default Metronome;