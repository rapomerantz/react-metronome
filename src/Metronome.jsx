import React, { Component } from 'react';
import './Metronome.css';

import click1 from './click1.wav';
import click2 from './click2.wav';

class Metronome extends Component {
    constructor(props){
        super(props); 
        this.state = {
            playing: false,
            bpm: 120,
            count: 0,
            beatsPerMeasure: 4,
            divisionHandler: 60
        }

        this.click1 = new Audio(click1)
        this.click2 = new Audio(click2)
    }

    handleBpmChange = (event) => {
        if (this.state.playing) {
            clearInterval(this.timer); 
            this.timer = setInterval(this.playClick, (60/this.state.bpm) * 1000); 

            this.setState({
                bpm: event.target.value, 
                count: 0 
            })
        } else {
            this.setState({
                bpm: event.target.value
            })   
        }
    }

    togglePlaying = () => {
        if (this.state.playing) {
            //STOP TIMER
            clearInterval(this.timer); 
            this.setState({
                playing: false
            })           
        } else {
            //START TIMER
            this.timer = setInterval(this.playClick, (60/this.state.bpm) * 1000); 
            this.setState({
                playing: true, 
                count: 0 
            }, this.playClick)
        }
    }

    playClick = () => {
        const {count, beatsPerMeasure} = this.state; 
        if (count % beatsPerMeasure === 0) {
            this.click1.play();
        } else {
            this.click2.play();
        }

        this.setState({
            count: (this.state.count + 1) % this.state.beatsPerMeasure
        })
    }

    handleChangeDivision = (newDivision) => () => {
        this.setState({
            divisionHandler: newDivision
        })
    }


  render() {
      const {bpm, playing} = this.state; 


    return (
        <div className="metronome">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className="bpm-slider">
        <div>{bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm} 
            onChange={this.handleBpmChange}/>
        </div>
        <button onClick={this.togglePlaying} id="startStopButton">
          {playing ? 'Stop' : 'Start'}
        </button>

        <button onClick={this.handleChangeDivision(60)}>1/4</button>
        <button onClick={this.handleChangeDivision(30)}>1/8</button>
        <button onClick={this.handleChangeDivision(15)}>1/16</button>
      </div>
    );
  }
}

export default Metronome;