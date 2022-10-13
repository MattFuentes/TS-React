import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FirstApp } from './FirstApp';
// import { TournamentApp } from './TournamentApp';
import { CounterApp } from './CounterApp';

import './main.css'
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0} />
    </React.StrictMode>
);