import React, { Component } from "react";
import "./App.css";

import { loadData } from "./util/myUtil";
import { Icon, Input, Container } from "semantic-ui-react";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // loadData(
    //   "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
    // ).then(data => {
    //   console.log(data);
    // });
  }

  render() {
    return (
      <div>
        <Container>
          <Input
            style={{ width: "100%" }}
            size="massive"
            icon={<Icon name="search" inverted circular link />}
            placeholder="Search..."
          />
        </Container>
      </div>
    );
  }
}

export default App;
