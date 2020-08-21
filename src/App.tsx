import React from 'react';
import './App.css';
import StateProvider from './context/StateProvider';
import initialState from './context/initialState';
import Landing from './layouts/Landing';

function App() {
  return (
    <StateProvider initialState={initialState}>
      <Landing>
        <div>Hello World</div>
      </Landing>
    </StateProvider>
  );
}

export default App;
