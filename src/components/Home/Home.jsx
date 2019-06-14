import React, { Component } from "react";
import { connect } from "react-redux";
import * as DataActions from "../../store/actions/data";
import { withRouter } from "react-router";
import MatchList from "./MatchList";
import "./Home.css";

// Amit beküldünk a store-ba (mapDispatchToProps)
const toStore = dispatch => {
  return {
    getmatches: () => dispatch(DataActions.GetMatches("?active=0&active=1&active=2"))
  };
};

// Amit kapunk a store-ból (mapStateToProps)
const fromStore = (state, match) => {
  return {
    matches: state.GetMatches.data
  };
};

class Home extends Component {
  componentDidMount() {
    this.props.getmatches();
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 text-black mx-auto text-center">
            <h1 className="text-white">Mérkőzések</h1>
          </div>
        </div>
        <div className="matchlist">
          <MatchList matches={this.props.matches} />
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    fromStore,
    toStore
  )(Home)
);
