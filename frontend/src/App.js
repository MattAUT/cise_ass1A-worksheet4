import React from "react";
import {
  Route,
  NavLink,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/home";
import SEPractice from "./pages/se-practice";
//import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";
import SubmitArticle from "./pages/submit-article";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/SEPractice">Select the Practice</NavLink>
          </li>
          <li>
            <NavLink to="/SubmitArticle">Submit an Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/SEPractice" component={SEPractice} />
          <Route path="/SubmitArticle" component={SubmitArticle} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </div>
      </div>
    </Router>
  );
};

export default App;
