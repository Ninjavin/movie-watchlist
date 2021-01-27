import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li><Link to='/'>Watchlist</Link></li>
					<li><Link to='/watched'>Watched</Link></li>
					<li><Link to='/add'>Add Movie to Watchlist</Link></li>
				</ul>
			</nav>
		</header>	
	)
}

export default Header;