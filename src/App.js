import React, { Component } from "react";
import "./App.css";

import { loadData } from "./util/myUtil";
import { Button, Icon, Form, Container } from "semantic-ui-react";

class App extends Component {
  state = {
    search: null
  };

  componentDidMount() {}

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };

  onSearch = () => {
    loadData(
      "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
    ).then(data => {
      let result = data.filter(d => d.keywords.includes(this.state.search));
      console.log(result);
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.onSearch}>
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
