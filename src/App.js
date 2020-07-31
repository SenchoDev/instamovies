import React from "react";
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";

import ProfilePage from "./pages/profile";
import EditProfilePage from "./pages/edit-profile";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import NotFoundPage from "./pages/not-found";
import MainPage from "./pages/main";
import MoviePage from "./pages/movie";
import SearchPage from "./pages/search";
import MoviesPage from "./pages/movies";
import { AuthContext } from "./auth";

function App() {
  const { authState } = React.useContext(AuthContext);
  const isAuth = authState.status === "in";

  if (!isAuth) {
    return (
      <Switch>
        <Route path="/accounts/login" component={LoginPage} />
        <Route path="/accounts/emailsignup" component={SignUpPage} />
        <Redirect to="/accounts/login" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/movies" component={MoviesPage} />
      {/*<Route path="/tv" component={TVPage} />*/}
      <Route exact path="/:username" component={ProfilePage} />
      <Route exact path="/m/:movieId" component={MoviePage} />
      <Route path="/accounts/edit" component={EditProfilePage} />
      <Route path="/accounts/login" component={LoginPage} />
      <Route path="/accounts/emailsignup" component={SignUpPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
