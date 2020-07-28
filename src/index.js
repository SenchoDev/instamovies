import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { ApolloProvider } from "@apollo/react-hooks";
import theme from "./theme";
import App from "./App";
import client from "./graphql/client";
import AuthProvider from "./auth";

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
