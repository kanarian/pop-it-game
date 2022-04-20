import './App.css';
import Board from './Board';
var { SocialIcon } = require('react-social-icons');

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Pop-it Game!</h1>
       <div className = "body">
       <Board></Board>  
       </div>
      </header>
      <body>
        <div className = "footer">This app was created by Arian Joyandeh. <SocialIcon className = 'linkedInButton' url="https://www.linkedin.com/in/arian-joyandeh-759079178/" style={{ height: 25, width: 25 }} bgColor="#282c34" /></div>
      </body>
    </div>
  );
}

export default App;
