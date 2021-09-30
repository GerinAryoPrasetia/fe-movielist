import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import PeopleLists from './pages/PeopleLists';
import MovieDetail from './components/movie/MovieDetail';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
