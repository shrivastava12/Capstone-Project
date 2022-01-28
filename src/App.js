import React,{Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from "./Components/Nav/Navs";

import Footer from "./Components/Footer";
import Test from "./Pages/Test";

const PlaylistDetail = React.lazy(() => import( "./Pages/PlaylistDetail"))
const SongDetail =  React.lazy(() => import("./Pages/SongDetail"))
const Song =  React.lazy(() => import("./Pages/Song"))
const Profile =  React.lazy(() => import('./Pages/Profile'))
const PlayList = React.lazy(() => import('./Pages/PlayList'))
const Login =  React.lazy(() => import('./Pages/Login'))
const Contact =  React.lazy(() => import("./Pages/Contact"));
const Home =  React.lazy(() => import('./Pages/Home'))

function App() {
  return (
    <Router>
     {/* <Navbar/> */}
     <Suspense fallback={<div>Loading....</div>}>
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
     </Suspense>
    </Router>
  );
}

export default App;
