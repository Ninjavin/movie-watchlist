import AppReducer from './AppReducer';
import React, { useReducer } from 'react';

const initialState = {
	watchlist: [],
	watched: []
}

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const addMovieToWatchlist = (movie) => {
		dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
	}

	const addMovieToWatched = (movie) => {
		dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie});
	}

	const removeFromWatchlist = (movie) => {
		dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie});
	}

	const removeFromWatched = (movie) => {
		dispatch({ type: "REMOVE_FROM_WATCHED", payload: movie});
	}

	return (
		<GlobalContext.Provider
			value={{
				watchlist: state.watchlist,
				watched: state.watched,
				addMovieToWatchlist,
				addMovieToWatched,
				removeFromWatched,
				removeFromWatchlist
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	)
}