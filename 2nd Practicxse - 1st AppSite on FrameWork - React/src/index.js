import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './CounterApp.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>);
