import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Pop-it Game!</h1>
       <div className = "body">
       <Board></Board>  
       </div>
      </header>
    </div>
  );
}

export default App;
