import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProfilePage from "./pages/profile";
import EditProfilePage from "./pages/edit-profile";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import NotFoundPage from "./pages/not-found";
import MainPage from "./pages/main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:username" component={ProfilePage} />
        <Route exact path="/m/:movieId" component={MoviePage} />
        <Route path="/accounts/edit" component={EditProfilePage} />
        <Route path="/accounts/login" component={LoginPage} />
        <Route path="/accounts/emailsignup" component={SignUpPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/tv" component={TVPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch> 
    </Router>
  );
}

export default App;
