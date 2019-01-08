import React, { Component } from "react";
import "./App.css";

import { loadData } from "./util/myUtil";
import { Button, Icon, Form, Container } from "semantic-ui-react";

class App extends Component {
  state = {
    search: null
  };

  componentDidMount() {
    // loadData(
    //   "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
    // ).then(data => {
    //   console.log(data);
    // });
  }

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={() => console.log(this.state.search)}>
            <Form.Field>
              <input onChange={this.handleSearch} placeholder="Search" />
            </Form.Field>
            <Button icon>
              <Icon name="search" />
            </Button>
          </Form>
          <div>{this.state.search}</div>
        </Container>
      </div>
    );
  }
}

export default App;
