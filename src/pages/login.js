import React from "react";
import { useLoginPageStyles } from "../styles";
import SEO from "../components/shared/Seo";
import FacebookIconBlue from "../images/facebook-icon-blue.svg";
import FacebookIconWhite from "../images/facebook-icon-white.png";
import isEmail from "validator/lib/isEmail";
import { AuthError } from "./signup";

import {
  Card,
  CardHeader,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../auth";
import { useApolloClient } from "@apollo/react-hooks";
import { GET_USER_EMAIL } from "../graphql/queries";

function LoginPage() {
  const classes = useLoginPageStyles();
  const { register, handleSubmit, watch, formState } = useForm({
    mode: "onBlur",
  });
  const [showPassword, setPasswordVisibility] = React.useState(false);
  const hasPassword = Boolean(watch("password"));
  const { logInWithEmailAndPassword } = React.useContext(AuthContext);
  const [error, setError] = React.useState("");
  const history = useHistory();
  const client = useApolloClient();

  function togglePasswordVisibility() {
    setPasswordVisibility((prev) => !prev);
  }

  async function onSubmit({ input, password }) {
    try {
      setError("");
      if (!isEmail(input)) {
        input = await getUserEmail(input);
      }
      await logInWithEmailAndPassword(input, password);
      setTimeout(() => history.push("/"), 10);
    } catch (error) {
      console.error("Error logging in", error);
      handleError(error);
    }
  }

  function handleError(error) {
    if (error.code.includes("auth")) {
      setError(error.message);
    }
  }

  async function getUserEmail(input) {
    const variables = { input };
    const response = await client.query({
      query: GET_USER_EMAIL,
      variables,
    });
    const userEmail = response.data.users[0]?.email || "no@email.com";

    return userEmail;
  }
  return (
    <React.Fragment>
      <SEO title="Login" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="input"
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
                fullWidth
                variant="filled"
                label="Username, email, or phone"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
                type="username"
              />
              <TextField
                name="password"
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
                InputProps={{
                  endAdornment: hasPassword && (
                    <InputAdornment>
                      <Button onClick={togglePasswordVisibility}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                variant="filled"
                label="Password"
                margin="dense"
                className={classes.textField}
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
              />
              <Button
                disabled={!formState.isValid || formState.isSubmitting}
                variant="contained"
                fullWidth
                color="secondary"
                className={classes.button}
                type="submit"
              >
                Log In
              </Button>
            </form>

            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>

            <LoginWithFacebook iconColor="blue" blue />
            <AuthError error={error} />
            <Button fullWidth className={classes.colorSecondary}>
              <Typography variant="caption">Forgot password?</Typography>
            </Button>
          </Card>

          <Card className={classes.signUpCard}>
            <Typography align="right" variant="body2">
              Don't have an account?
            </Typography>
            <Link to="/accounts/emailsignup">
              <Button color="primary" className={classes.signUpButton}>
                Sign up
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </React.Fragment>
  );
}

export function LoginWithFacebook({ color, iconColor, variant, blue }) {
  const classes = useLoginPageStyles();
  const { logInWithGoogle } = React.useContext(AuthContext);
  const facebookIcon =
    iconColor === "blue" ? FacebookIconBlue : FacebookIconWhite;
    const history = useHistory()

  const [error, setError] = React.useState("");
  async function handleLogInWithGoogle() {
    try {
      setError('')
      await logInWithGoogle();
      setTimeout(() => history.push('/'), 100)
    } catch (error) {
      console.error("Error logging in with google", error);
      setError(error.message);
    }
  }

  return (
    <React.Fragment>
      <Button
        fullWidth
        color={color}
        variant={variant}
        className={blue ? classes.buttonColor : classes.buttonWhite}
        onClick={handleLogInWithGoogle}
      >
        <img
          src={facebookIcon}
          alt="facebook icon"
          className={classes.facebookIcon}
        />
        Log In with Facebook
      </Button>
      <AuthError error={error}/>
    </React.Fragment>
  );
}

export default LoginPage;
