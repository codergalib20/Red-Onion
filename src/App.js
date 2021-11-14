import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Pages/Cart';
import Footer from './components/Pages/Footer';
import Header from './components/Pages/Header';
import Home from './components/Pages/Home';
import OrderPage from './components/Pages/OrderPage';

function App() {
  const [preload, setPreload] = useState(true);
  useEffect(()=> {
    const preLoader = document.getElementById('preloader');
    setTimeout(() => {
       preLoader.style.display = 'none';
       setPreload(false)
    }, 8000);
}, [])
  return (
    <Router>
    {
      preload === true ? 
        <div id="preloader" className="flex items-center justify-center min-h-screen">
           <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
           </div>
        </div>
        :
        <Switch>
          <Route exact path="/">
              <Header/>
              <Home/>
              <Footer/>
          </Route>
          <Route path="/home">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
          <Route path="/food/:order">
            <Header/>
            <OrderPage/>
            <Footer/>
          </Route>
          <Route path="/cart">
            <Header/>
            <Cart/>
            <Footer/>
          </Route>
        </Switch>
    }
    </Router>

  );
}

export default App;
