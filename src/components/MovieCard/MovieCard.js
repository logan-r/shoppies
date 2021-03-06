import './MovieCard.css';

/**
 * Display a card for a movie
 * Props:
 * Title {string}  the title of the movie
 * Year {number}  the year the movie was made
 * Poster {string}  link to poster for the movie
 * imdbID {string}  unique ID for the movie
 * isNominated {boolean}  is this movie currently nominated?
 * onSelect {function}  function to call when nomination button clicked
 */
export default function MovieCard(props) {
  return (
    <div className="MovieCard">
      <img src={props.Poster} alt={`Poster for ${props.Title}`} className="MovieCard-poster" />
      <div className="MovieCard-text">
        <h3>{props.Title}</h3>
        <div className="MovieCard-year">{props.Year}</div>
      </div>
      <div className="MovieCard-nominate-btn" onClick={props.onSelect}>
        {props.isNominated ? 'Unselect' : 'Nominate'}
      </div>
    </div>
  )
}