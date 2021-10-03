import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import PeopleLists from './pages/PeopleLists';
import MovieDetail from './components/movie/MovieDetail';
import GenreLists from './pages/GenreLists';
import Action from './components/genre/Action';
import Comedy from './components/genre/Comedy';
import Drama from './components/genre/Drama';
import Horror from './components/genre/Horror';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/other-list' component={PeopleLists} />
          <Route path='/movie-detail/:id' component={MovieDetail} />
          <Route path='/genre' component={GenreLists} />
          <Route path={'/action'} component={Action} />
          <Route path={'/comedy'} component={Comedy} />
          <Route path={'/drama'} component={Drama} />
          <Route path={'/horror'} component={Horror} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
