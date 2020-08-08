import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
import { useSubscription } from "@apollo/react-hooks";
import { ME } from "./graphql/subscriptions";
import LoadingScreen from "./components/shared/LoadingScreen";

export const SearchContext = React.createContext({
  searchMovie: "",
});

export const UserContext = React.createContext();

function App() {
  const { authState } = React.useContext(AuthContext);
  const isAuth = authState.status === "in";
  const userId = isAuth ? authState.user.uid : null;
  const variables = { userId };
  const { data, loading } = useSubscription(ME, { variables });
  const initialSearchState = React.useContext(SearchContext);
  const [state, dispatch] = React.useReducer(searchReducer, initialSearchState);

  if (loading) return <LoadingScreen />;

  if (!isAuth) {
    return (
      <Switch>
        <Route path="/accounts/login" component={LoginPage} />
        <Route path="/accounts/emailsignup" component={SignUpPage} />
        <Redirect to="/accounts/login" />
      </Switch>
    );
  }

  const me = isAuth && data ? data.users[0] : null;
  const currentUserId = me.id;

  return (
    <UserContext.Provider
      value={{
        me,
        currentUserId,
      }}
    >
      <SearchContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/movies/:type" component={MoviesPage} />
          {/*<Route path="/tv" component={TVPage} />*/}
          <Route exact path="/:username" component={ProfilePage} />
          <Route exact path="/m/:movieId" component={MoviePage} />
          <Route path="/accounts/edit" component={EditProfilePage} />
          <Route path="/accounts/login" component={LoginPage} />
          <Route path="/accounts/emailsignup" component={SignUpPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </SearchContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
