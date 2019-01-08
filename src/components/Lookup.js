import React, { Component } from "react";
import { Button, Input, Form, Container, Grid } from "semantic-ui-react";
import Parser from "html-react-parser";

import { loadData } from "../util/myUtil";

class Lookup extends Component {
  state = {
    search: null,
    items: null
  };

  handleSearch = e => {
    if (e.target.value === "") {
      this.setState({
        items: null
      });
    } else {
      this.setState({
        search: e.target.value
      });
    }
  };

  onSearch = () => {
    loadData(
      "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000"
    ).then(data => {
      if (this.state.search != null) {
        var filteredSearch = this.state.search.toLowerCase();
      }

      let result = data.filter(d => d.keywords.includes(filteredSearch));

      this.setState({
        items: result
      });

      console.log(this.state.items);
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.onSearch}>
            <Input
              style={styles.input}
              onChange={this.handleSearch}
              action={{ icon: "search" }}
              placeholder="Search..."
            />
          </Form>
          <Grid divided="vertically">
            {this.state.search &&
              this.state.items &&
              this.state.items.map(item => (
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <p style={styles.title}>
                      <Button
                        onClick={() => console.log("hi")}
                        style={styles.icon}
                        circular
                        icon="star"
                        color="grey"
                      />
                      {item.title}
                    </p>
                  </Grid.Column>
                  <Grid.Column>{Parser(item.body)}</Grid.Column>
                </Grid.Row>
              ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

const styles = {
  input: {
    width: "100%",
    marginBottom: "2%"
  },
  title: {
    fontSize: "1.5em"
  },
  icon: {
    marginRight: "3%"
  }
};

export default Lookup;
