import React, { Component } from "react";
import "./App.css";

import { Header } from "semantic-ui-react";
import Lookup from "./components/Lookup";

class App extends Component {
  state = {
    search: null
  };

  render() {
    return (
      <div>
        <div style={styles.headerBackground}>
          <Header style={styles.headerText} size="huge">
            Toronto Waste Lookup
          </Header>
        </div>

        <Lookup />
      </div>
    );
  }
}

const styles = {
  headerBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to right, #1d5994 , #22965e)",
    height: "125px",
    marginBottom: "3%"
  },
  headerText: {
    color: "white",
    fontSize: "3em"
  }
};

export default App;
