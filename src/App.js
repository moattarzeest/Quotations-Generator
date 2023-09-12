import logo from './logo.svg';
import './App.css';
import MoodTiles from './components/MoodTiles/MoodTiles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Quotations Generator Application</h1>
        <h3>We will help you find a quote that will make you feel better!😉</h3>
       <MoodTiles/>
      </header>
    </div>
  );
}

export default App;
