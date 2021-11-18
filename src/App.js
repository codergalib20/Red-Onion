import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import OrderPage from "./components/Pages/OrderPage";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  const [preload, setPreload] = useState(true);
  useEffect(() => {
    const preLoader = document.getElementById("preloader");
    setTimeout(() => {
      preLoader.style.display = "none";
      setPreload(false);
    }, 8000);
  }, []);
  return (
    <AuthProvider>
      <Router>
        {preload === true ? (
          <div
            id="preloader"
            className="flex items-center justify-center min-h-screen"
          >
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route path="/home">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route path="/cart">
              <Header />
              <Cart />
              <Footer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/food/:order">
              <Header />
              <OrderPage />
              <Footer />
            </Route>
          </Switch>
        )}
      </Router>
    </AuthProvider>
  );
}

export default App;
