// src/App.js
import React from 'react';
import ReviewList from './component/ReviewList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold">Review Sentiment Analysis</h1>
      </header>
      <main className="p-4">
        <ReviewList />
      </main>
    </div>
  );
}

export default App;
