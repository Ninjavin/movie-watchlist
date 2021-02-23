import { useContext } from "react";
import { GlobalContext } from "../GlobalState";

const Watched = () => {

	const {watched} = useContext(GlobalContext);

	return (
		<div>
			<p>Watched</p>
			{watched.length > 0 && (
				watched.map((movie) => 
					<div key={movie.id}>{movie.original_title}</div>
				)
			)}
		</div>
	)
}

export default Watched;