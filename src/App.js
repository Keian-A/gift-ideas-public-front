import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Signup from './components/signup/Signup.jsx';
import Login from './components/login/Login.jsx';
import LoginRedirect from './components/login-redirect/LoginRedirect.jsx';
import { Provider } from 'react-redux';
import store from './store/index.js';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/log-in"
            element={<Login />}
          />
          <Route
            path="/user-home"
            element={<LoginRedirect />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
