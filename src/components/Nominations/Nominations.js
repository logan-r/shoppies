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
              <li>
                {movie.Title} ({movie.Year})
              </li>
            )
          }
        </ol>
      }
    </div>
  )
}