import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomePgae from './pages/HomePgae';
import NewArticle from './pages/NewArticle';
import ArticlesPage from './pages/ArticlesPage';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar';
import NewUser from './pages/NewUser';
import Login from './pages/Login';

function App() {
  return (
    
    <Router>
     
        <NavBar/>
      <div id="page-body">
      <Route path='/' component={HomePgae} exact/>
      <Route path='/about' component={AboutPage} exact/>
      <Route path='/register' component={NewUser} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/new-article' component={NewArticle} exact/>
      <Route path='/article-list' component={ArticlesPage} exact/>
      </div>
    
    </Router>
    
  );
}

export default App;
