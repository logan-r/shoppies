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

  return (
    <div className="App">
      <SearchPanel nominations={nominations} addToNominations={addToNominations} />
      <Nominations nominations={nominations} />
    </div>
  );
}

export default App;
