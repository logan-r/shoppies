import './MovieCard.css';

/**
 * Display a card for a movie
 * Props:
 * Title {string}  the title of the movie
 * Year {number}  the year the movie was made
 * Poster {string}  link to poster for the movie
 * imdbID {string}  unique ID for the movie
 */
export default function MovieCard(props) {
  return (
    <div className="MovieCard">
      <img src={props.Poster} alt={`Poster for ${props.Title}`} className="poster" />
      <h3>{props.Title}</h3>
      <div className="year">{props.Year}</div>
    </div>
  )
}