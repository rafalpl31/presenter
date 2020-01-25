import React from 'react';
import { DayLightPhases } from './client/components/DayLightPhases/index';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Daylight periods
            </header>
            <hr/>
            <DayLightPhases/>
        </div>
    );
}

export default App;
