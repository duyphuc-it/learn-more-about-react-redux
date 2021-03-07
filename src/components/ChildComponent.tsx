import React from "react";
import { connect } from "react-redux";
import { AppState } from "store/store";

const ChildComponent = (props: any) => {
  return <div>Hello</div>;
};

const mapStateToProps = (state: AppState) => ({
  themeState: state.theme,
});

export default connect(mapStateToProps)(ChildComponent);
