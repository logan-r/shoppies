import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './SearchPanel.css';

export default function SearchPanel() {
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

        // Make sure there was a response
        if (data.Response === 'False') {
          setNoResults(true);
        } else {
          setNoResults(false);
          setSearchResults(data.Search);
        }

        // Done loading
        setLoading(false);
      } catch(e) {
        console.log(e);
        alert('Error fetching movies from API');
      }
    }
  }, [searchQuery]);

  return (
    <div className="SearchPanel">
      <div className="SearchPanel-heading-bar">
        <h1>The Shoppies</h1>
        <input
          className="search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by movie title"
          autoFocus={true}
        />
      </div>
      {
        loading ? 'Loading...' :
        searchQuery === '' ? 'Search to see movies' :
        noResults ? 'Type more to search' : 
        <div className="SearchPanel-movie-grid">
          {searchResults.map(movie => <MovieCard {...movie} key={movie.imdbID} />)}
        </div>
      }
    </div>
  )
}