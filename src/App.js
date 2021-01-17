import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <h1>Your Shoppies Nominations</h1>
      </div>
      <div className="Sidebar">
        <h2>Add a nomination</h2>
        <input className="SearchBar" placeholder="Search by movie title" />
      </div>
    </div>
  );
}

export default App;
