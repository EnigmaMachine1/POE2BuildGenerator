import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './containers/Homepage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body className='bg-black text-white'>
      <Homepage />
    </body>
  </React.StrictMode>
);
