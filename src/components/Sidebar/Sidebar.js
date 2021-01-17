import { useEffect, useState } from 'react';
import './Sidebar.css';

export function Sidebar() {
  // Keep track of what the user has entered in search bar
  const [searchQuery, setSearchQuery] = useState('');

  // Keep track if currently loading search results from api
  const [loading, setLoading] = useState(false);

  // Track if error getting results (due to not typing enough character, etc.)
  const [noResults, setNoResults] = useState(false);

  // Movies currently being displayed as search results
  const [searchResults, setSearchResults] = useState([]);

  // Whenever the search query changes, load new results
  useEffect(async () => {
    // Only search if query is non-empty
    if (searchQuery) {
      setLoading(true);

      // Fetch search results from API
      try {
        const result = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&type=movie&apikey=23afe4e0`);
        const data = await result.json();

        // Done loading
        setLoading(false);

        // Make sure there was a response
        if (data.response === 'False') {
          setNoResults(true);
        } else {
          setNoResults(false);
        }

        setSearchResults(data.Search);
      } catch(e) {
        console.log(e);
        alert('Error fetching movies from API');
      }
    }
  }, [searchQuery]);

  return (
    <div className="Sidebar">
      <h2>Add a nomination</h2>
      <input
        className="search"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search by movie title"
        autoFocus={true}
      />
      {
        loading ? 'Loading...' :
        searchQuery === '' ? 'Search to see movies' :
        noResults ? 'Type more to search' : JSON.stringify(searchResults)
      }
    </div>
  )
}