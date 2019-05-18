import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Data from '../../store/actions/data';
import { withRouter } from "react-router";
import * as moment from 'moment';
import './Home.css';

// Amit beküldünk a store-ba (mapDispatchToProps)
const toStore = (dispatch) => {
  return {
    getmatches: () => dispatch(Data.GetMatches("?active=0&active=1&active=2"))
  }
}

// Amit kapunk a store-ból (mapStateToProps)
const fromStore = (state, match) => {
  return {
    matches: state.GetMatches.data
  }
}

class Home extends Component {
  componentDidMount() {
    console.log("GetMatches() call..");
    this.props.getmatches();
  }
  matchList = () => {
    let returnArray = [];
    if(this.props.matches){
      this.props.matches.sort((x,y)=>parseInt(x.active)-parseInt(y.active));
      for (let i = 0; i < this.props.matches.length; i++) {
        let collapseID = `collapse_${i}`;
        let label = this.props.matches[i].goalA ? `${this.props.matches[i].goalA}-${this.props.matches[i].goalB}` : moment(parseInt(this.props.matches[i].date)).format("YYYYMMDD");
        returnArray.push(<div className="match-container border border-dark animated fadeIn mt-3" key={i}>
          <div className="d-flex justify-content-between information-container finishmatch">
            <div className="mobile-flag">
              <img src="/img/Flags/fradi.png" alt="flag" className="img-flag" />
            </div>
            <div className="information align-self-center">{label}</div>
            <div className="mobile-flag">
              <img src="/img/Flags/ujpest.png" alt="flag" className="img-flag" />
            </div>
          </div>
          <div className="simplebetting-container d-flex p-2">
            <div className="hometeam flex-fill text-right align-self-center">{this.props.matches[i].teamA.name}</div>
            <div className="matchresult flex-fill text-center align-self-center">0</div>
            <div className="flex-fill text-center">
              <img src="/img/Flags/fradi.png" alt="flag" className="img-flag desktop-flag" />
            </div>
            <div className="betting flex-fill text-center p-1 d-flex justify-content-around">
              <button type="button" className="btn btn-sm btn-primary">1.23</button>
              <button type="button" className="btn btn-sm btn-primary">2.23</button>
              <button type="button" className="btn btn-sm btn-primary">3.21</button>
            </div>
            <div className="flex-fill text-center">
              <img src="/img/Flags/ujpest.png" alt="flag" className="img-flag desktop-flag" />
            </div>
            <div className="matchresult flex-fill text-center align-self-center">1</div>
            <div className="awayteam flex-fill text-left align-self-center">{this.props.matches[i].teamB.name}</div>
          </div>
          <div className="openmorebetting text-center p-1 border-top border-bottom d-flex align-items-center justify-content-center collapsed"
            data-toggle="collapse" href={"#" + collapseID} role="button" aria-expanded="false" aria-controls={collapseID}>
            További fogadások a mérkőzésre
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div className="morebetting-container p-2 collapse" id={collapseID}>
            <p className="morebetting-title">KÉTESÉLY</p>
            <div className="morebetting-item d-flex mb-1 row">
              <div className="bettingbox flex-fill text-center d-flex border-right col-xs-12 col-sm-12 col-md-4">
                <div className="morebetting-text flex-fill align-self-center">Belgium vagy Döntetlen</div>
                <div className="flex-fill align-self-center">
                  <button type="button" className="btn btn-sm btn-primary">1.23</button>
                </div>
              </div>
              <div className="bettingbox flex-fill text-center d-flex border-right col-xs-12 col-sm-12 col-md-4">
                <div className="morebetting-text flex-fill align-self-center">Belgium vagy Anglia</div>
                <div className="flex-fill align-self-center">
                  <button type="button" className="btn btn-sm btn-primary">1.23</button>
                </div>
              </div>
              <div className="bettingbox flex-fill text-center d-flex col-xs-12 col-sm-12 col-md-4">
                <div className="morebetting-text flex-fill align-self-center">Döntetlen vagy Anglia</div>
                <div className="flex-fill align-self-center">
                  <button type="button" className="btn btn-sm btn-primary">1.23</button>
                </div>
              </div>
            </div>
            <hr />
            <p className="morebetting-title">GÓLSZÁM 0,5</p>
            <div className="morebetting-item d-flex mb-1 row">
              <div className="bettingbox flex-fill text-center d-flex border-right col-xs-12 col-sm-4">
                <div className="morebetting-text flex-fill align-self-center">Kevesebb, mint 0,5</div>
                <div className="flex-fill align-self-center">
                  <button type="button" className="btn btn-sm btn-primary">1.23</button>
                </div>
              </div>
              <div className="bettingbox flex-fill text-center d-flex col-xs-12 col-sm-4">
                <div className="morebetting-text flex-fill align-self-center">Több, mint 0,5</div>
                <div className="flex-fill align-self-center">
                  <button type="button" className="btn btn-sm btn-primary">1.23</button>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }
    }
    return returnArray
  }

  render() {

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 text-black mx-auto text-center"><h1 className="text-white">Mérkőzések</h1></div>
        </div>
        {this.matchList()}
      </div>
    );
  }
}

export default withRouter(connect(fromStore, toStore)(Home));