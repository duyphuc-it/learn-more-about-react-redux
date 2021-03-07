import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import { connect, useDispatch } from "react-redux";
import { AppState } from "store/store";
import { ThemeState, updateTheme } from "./store/theme/themeSlice";
import ChildComponent from "components/ChildComponent";
import { login } from "./store/authentication/authenticationSlice";

const useStyles = makeStyles({});

interface AppProps {
  themeState: ThemeState;
  updateTheme: typeof updateTheme;
}

const App = (props: AppProps) => {
  const { themeState, updateTheme } = props;
  const [myState, setMyState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login(false));
  }, []);

  return (
    <div className="App">
      <h1>{themeState.currentTheme}</h1>
      <button onClick={() => updateTheme("Blue")}>Theme Blue</button>
      <button onClick={() => updateTheme("Red")}>Theme Red</button>
      <button onClick={() => updateTheme("Yellow")}>Theme Yellow</button>
      <button onClick={() => setMyState(!myState)}>
        Set state {myState ? "hehe" : "huhu"}
      </button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  themeState: state.theme,
});

const mapDispatchToProps = {
  updateTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
