import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Nav/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import PlayList from "./Pages/PlayList";
import Profile from "./Pages/Profile";
import Song from "./Pages/Song";
import SongDetail from "./Pages/SongDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from "./Components/Nav/Navs";
import Footer from "./Components/Footer";
import Test from "./Pages/Test";
import PlaylistDetail from "./Pages/PlaylistDetail";



function App() {
  return (
    <Router>
     {/* <Navbar/> */}
     <Navs/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/song' component={Song} />
        <Route exact path='/song-detail/:id' component={SongDetail} />
        <Route exact path='/playlist' component={PlayList}/>
        <Route exact path='/playlist-detail/:id' component={PlaylistDetail} />
        <Route exact path='profile' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/test' component={Test} />
      </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
