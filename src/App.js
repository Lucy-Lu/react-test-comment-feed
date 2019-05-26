import React from 'react';
import './App.css';
import CommentFeed from './containers/CommentFeed'
const comments = [
    {
        author: 'Ian Wilson',
        text: 'A boats a boat but a mystery box could be anything.'
    },
    {
        author: 'Max Powers Jr',
        text: 'Krypton sucks.'
    },
    {
        author: 'Kent Beck',
        text: 'Red, Green, Refactor.'
    }
]
function App() {
  return (
    <div className="App">
      <CommentFeed comments={comments}/>
    </div>
  );
}

export default App;
