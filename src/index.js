import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.css';
import App from './App';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
