import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from './pages/Blog';
import profile from './pages/profile';
import baca from './pages/baca';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
      </ul>
      <Route path="/" component={App} />
      <Route exact path="pages/profile" component={profile} />
      <Route exact path="/Blog" component={Blog} />
      <Route path="/Blog/:id" component={baca} />

    </div>
  </Router>
  // 
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
