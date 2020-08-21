import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, CssBaseline, Typography } from "@material-ui/core";
import { ApolloProvider } from "@apollo/react-hooks";
import theme from "./theme";
import App from "./App";
import client from "./graphql/client";
import AuthProvider from "./auth";
import { BrowserRouter as Router } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Typography
          style={{ paddingTop: 30 }}
          component="h1"
          variant="h6"
          align="center"
        >
          Ooops! Something went wrong. Try again.
        </Typography>
      );
    }
    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </MuiThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
