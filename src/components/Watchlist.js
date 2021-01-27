import { useContext } from "react";
import { GlobalContext } from "../GlobalState";

const Watchlist = () => {

	const { watchlist } = useContext(GlobalContext);

	return (
		<div>
			<p>Watchlist</p>
			{watchlist.length > 0 ? (
				watchlist.map((movie) => {
					return (
						<div>{movie.original_title}</div>
					)
				})
			) : (
				<p>Add Movies to Watchlist</p>
			)}
		</div>
	)
}

export default Watchlist;