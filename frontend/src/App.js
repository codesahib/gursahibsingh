import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { ThemeProvider } from './components/common/Theme';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Blogs from './components/blogs/Blogs';
import BlogPage from './components/blogs/BlogPage';
import PageNotFound from './components/common/PageNotFound';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <a className="skip" href="#main" onClick={event => {
        event.preventDefault();
        const main = document.getElementById('main');
        if (main) { main.tabIndex = -1; main.focus(); }
      }}>Skip to content</a>
      <div className="wrap">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home"><Redirect to="/" /></Route>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/thailand" component={BlogPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
