import './Nominations.css';

export default function Nominations(props) {
  return (
    <div className="Nominations">
      <h2>Your Nominations</h2>
      {
        props.nominations.length === 0 ?
        <div className="Nominations-empty">No nominations yet</div> :
        <ol>
          {
            props.nominations.map(movie =>
              <li key={movie.imdbID}>
                {movie.Title} ({movie.Year})
                <span className="Nominations-remove" onClick={() => props.removeFromNominations(movie)}>remove</span>
              </li>
            )
          }
        </ol>
      }

      {
        props.nominations.length === 5 &&
        <div className="Nominations-banner">
          You've selected your 5 movies
        </div>
      }
    </div>
  )
}