import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch("/model").then(response =>
      console.log(response)
      ).then(jsonData => {
        console.log(jsonData)
      })
  }, [])
  
  return (
    
const session = require('expression-session');
  app.use(
    session({
      secret: 'secret string',
      resave: false,
      saveUninitialized: false, 
      cookie: { /k can add cookie related info here */ }
    })
   );
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>Counter</h2>
        </div>
      </header>
      <footer>
        <p>Author: Melany Ebrahim, Dany Sonethavy</p>
        <p>The application is a counter which count the number of times the page has been accessed by the current use.</p>
      </footer>
    </div>
  );
}

export default App;

