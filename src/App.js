import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Product from './pages/Product';
import Contact from './pages/Contact';
import ProtectedRoutes from './Services/ProtectedRoutes';

function App() {
  return (
    <div className="App">
            <Navbar />
            <Routes>
            <Route exact path='/home' element={< Home />}></Route>
            <Route exact path='/' element={< Login />}></ Route>
             <Route path="/product" element={<ProtectedRoutes />}>
            <Route exact path='/product' element={< Product />}></ Route>
             </Route>
            <Route exact path='/contact' element={< Contact />}></ Route>
            <Route exact path='/registration' element={< Registration />}></ Route>
            </Routes>
    </div>
  );
}

export default App;
