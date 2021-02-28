import { makeStyles } from "@material-ui/core";
import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { AppState } from "store/store";
import { ThemeState, updateTheme } from "./store/theme/themeSlice";

const useStyles = makeStyles({});

interface AppProps {
  themeState: ThemeState;
  updateTheme: typeof updateTheme;
}

const App = (props: AppProps) => {
  const { themeState, updateTheme } = props;
  return (
    <div className="App">
      <h1>{themeState.currentTheme}</h1>
      <button onClick={() => updateTheme("Blue")}>Theme Blue</button>
      <button onClick={() => updateTheme("Red")}>Theme Red</button>
      <button onClick={() => updateTheme("Yellow")}>Theme Yellow</button>
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
