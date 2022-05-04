// import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('app'));