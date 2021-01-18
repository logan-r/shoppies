import { useState } from 'react';
import './App.css';
import Nominations from './components/Nominations/Nominations';
import SearchPanel from './components/SearchPanel/SearchPanel';

function App() {
  // Keep track of current nominations
  const [nominations, setNominations] = useState([]);
  const addToNominations = (movie) => {
    setNominations([...nominations, movie]);
  }
  const removeFromNominations = (movie) => {
    let tempNominations = [...nominations];
    let index = tempNominations.indexOf(movie);
    if (index >= 0) {
      tempNominations.splice(index, 1);
      setNominations(tempNominations);
    }
  }

  return (
    <div className="App">
      <SearchPanel nominations={nominations} addToNominations={addToNominations} removeFromNominations={removeFromNominations} />
      <Nominations nominations={nominations} removeFromNominations={removeFromNominations} />
    </div>
  );
}

export default App;
