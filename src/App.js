import logo from './logo.svg';
import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home  from './components/home/Home';
import  PageNotFound from './components/pagenotfound/PageNotFound';
import MovieDetails from './components/moviedetail/MovieDetails';
import Footer from './components/footer/Footer';
function App() {
  return ( 
    <div className="App">
      <Header/>
      <div className='container container_div'>
      <Routes>
                <Route exact  path='/'  element={< Home />}></Route>
                <Route exact path='/movie/:imdbID' element={< MovieDetails />}></ Route>
                <Route exact path='/*' element={< PageNotFound />}></ Route>
      </Routes>
      </div>
      <Footer/>
     </div>
  );
}

export default App;
