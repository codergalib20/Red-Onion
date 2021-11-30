import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Register from "./components/Login/Register";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import OrderPage from "./components/Pages/OrderPage";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
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
            <PrivateRoute  path="/food/:order">
              <Header />
              <OrderPage />
              <Footer />
            </PrivateRoute>
          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
