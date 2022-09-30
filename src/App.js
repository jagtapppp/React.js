import logo from './logo.svg';
import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Home  from './components/home/Home';
 
import Header from './components/header/Header.js';
import  PageNotFound from './components/pagenotfound/PageNotFound';
import MovieDetails from './components/moviedetail/MovieDetails';
import Footer from './components/footer/Footer';
function App() {
  return ( 
    <div className="App">
      <Header></Header>
      <div className='container'>
      <Routes>
                <Route  path='/' exact element={< Home />}></Route>
                <Route exact path='/movie/:imdbID' element={< MovieDetails />}></ Route>
                <Route exact path='/*' element={< PageNotFound />}></ Route>
      </Routes>
      </div>
      <Footer />
     </div>
  );
}

export default App;
