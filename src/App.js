import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Add from './components/Add';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import Header from './components/Header';
import { GlobalProvider } from './GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'><Watchlist /></Route>
            <Route path='/add'><Add /></Route>
            <Route path='/watched'><Watched /></Route>
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
