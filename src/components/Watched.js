import { useContext } from "react";
import { GlobalContext } from "../GlobalState";

const Watched = () => {

	const {watched} = useContext(GlobalContext);

	return (
		<div>
			{watched.length > 0 && (
				watched.map((movie) => {
					return (
						<div>{movie.original_title}</div>
					)
				})
			)}
		</div>
	)
}

export default Watched;