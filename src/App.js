import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import Navbar from "./components/layout/Navbar.js";
import { Routes,Route } from 'react-router-dom';
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import ViewUser from './components/Users/ViewUser';

function App() {
  return (

    <div className="App">
      {/* <button type="button" class="btn btn-dark">Dark</button> */}
      <Navbar />

      <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></ Route>
                <Route exact path='/contact' element={< Contact />}></ Route>
                <Route exact path='/add' element={< AddUser />}></ Route>
                <Route exact path='/edit/:id' element={< EditUser />}></ Route>
                <Route exact path='/view/:id' element={< ViewUser />}></ Route>
                <Route exact path='/*' element={< PageNotFound />}></ Route>
      </Routes>
    </div>
  );
}

export default App;
