import './App.css';
import Board from './Board';
var { SocialIcon } = require('react-social-icons');

function App() {
  return (
    <div className="Pop-It Game!">
      <header className="App-header">
       <h1>Pop-it Game!</h1>
       <div className = "body">
       <Board></Board>  
       </div>
      </header>
      <div>
        <div className = "footer">This app was created by Arian Joyandeh. <SocialIcon className = 'linkedInButton' url="https://www.linkedin.com/in/arian-joyandeh-759079178/" style={{ height: 25, width: 25 }} bgColor="#282c34" /></div>
      </div>
    </div>
  );
}

export default App;
