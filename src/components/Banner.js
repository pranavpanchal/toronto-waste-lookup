import React, { Component } from "react";

import { Header } from "semantic-ui-react";

class Banner extends Component {
  render() {
    return (
      <div style={styles.headerBackground}>
        <Header style={styles.headerText} size="huge">
          Toronto Waste Lookup
        </Header>
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

export default Banner;
