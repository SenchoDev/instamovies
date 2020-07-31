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
import searchReducer from "./reducer";

export const SearchContext = React.createContext({
  searchMovie: '',
});

function App() {
  const { authState } = React.useContext(AuthContext);
  const isAuth = authState.status === "in";
  const initialSearchState = React.useContext(SearchContext);
  const [state, dispatch] = React.useReducer(searchReducer, initialSearchState);

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
    <SearchContext.Provider value={{ state, dispatch }}>
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
    </SearchContext.Provider>
  );
}

export default App;
