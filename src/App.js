import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SubRedditPage from "./pages/SubRedditPage";

function App () {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/subreddit/:subRedditId">
                <SubRedditPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
