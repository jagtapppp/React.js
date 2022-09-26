import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Product from './pages/Product';
import Productlist from './pages/Productlist';

import Header from './components/Header';


function App() {
  return (
    <div className="App">
      {/* < Header/> */}
    
      <Sidebar/>
<Routes>
  <Route exact path='/' element={<Dashboard />}> </Route>
  <Route exact path='/dashboard' element={<Dashboard />}> </Route>
  <Route exact path='/about' element={< About />}></Route>
  <Route exact path='/product' element={< Product />}></Route>
  <Route exact path='/productlist' element={< Productlist />}></Route>

</Routes>

    </div>
  );
}

export default App;
