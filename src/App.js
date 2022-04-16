import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Pages/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Login from './components/Pages/Login';
import Registration from './components/Pages/Registration';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;