import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Metronome from './Metronome.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Metronome />, document.getElementById('root'));
registerServiceWorker();
