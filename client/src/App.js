import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
    let [count, setCount] = useState(null);
    useEffect(() => {
      fetch("http://0.0.0.0:4000/get_count").then(response =>
        console.log(response).then(data => setCount(data.pageCount))
        )
    }, [])
      
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Here is the number of times you access this page :
            </p>
              {count}
          </header>
        </div>
      );
    }

export default App;