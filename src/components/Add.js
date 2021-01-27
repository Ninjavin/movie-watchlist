import { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalState';


const Add = () => {

	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	const { addMovieToWatchlist, addMovieToWatched, removeFromWatchlist, removeFromWatched, watchlist, watched } = useContext(GlobalContext);

	const handleSearchInput = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1&include_adult=false&query=${query}`).then(res => res.json()).then(data => {
			if (!data.errors) {
				setResults(data.results);
			} else {
				setResults([]);
			}
		})
	}

	return (
		<div>
			<form>
				<input type="text" placeholder="Search for a movie" value={query} onChange={handleSearchInput} />
			</form>
			{results.length > 0 && (
				results.map((movie, id) => 
					<div>
						{movie.original_title}
						{watchlist.findIndex((m) => m.id === movie.id) === -1 ? (
							<button onClick={() => addMovieToWatchlist(movie)}>
								Add to Watchlist
							</button>
						) : (
							<button onClick={() => removeFromWatchlist(movie)}>
								Remove From Watchlist
							</button>
						)}

						{watched.findIndex((m) => m.id === movie.id) === -1 ? (
							<button onClick={() => addMovieToWatched(movie)}>
								Add to Watched
							</button>
						) : (
							<button onClick={() => removeFromWatched(movie)}>
								Remove From Watched
							</button>
						)}

					</div>)
			)}
		</div>
	)
}

export default Add;
