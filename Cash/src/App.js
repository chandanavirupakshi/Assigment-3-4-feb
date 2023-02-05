import React from "react";
import { connect } from "react-redux";
import './App.css'

class App extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>
          Deposit $10
        </button>
        <button onClick={this.decrement}>
          WithDraw $10
        </button>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: "$" + state.count
  };
};

export default connect(mapStateToProps)(App);
