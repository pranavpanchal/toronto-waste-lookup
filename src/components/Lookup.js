import React, { Component } from "react";
import { Input, Form, Container, Grid, Icon } from "semantic-ui-react";
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
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.onSearch}>
            <Input
              onChange={this.handleSearch}
              style={styles.input}
              icon={
                <Icon
                  onClick={this.onSearch}
                  color="green"
                  name="search"
                  inverted
                  circular
                  link
                />
              }
              placeholder="Search..."
            />
          </Form>
          <Grid divided="vertically">
            {this.state.search &&
              this.state.items &&
              this.state.items.map(item => (
                <Grid.Row key={item.title} columns={2}>
                  <Grid.Column>
                    <p style={styles.title}>
                      <Icon
                        onClick={() => this.props.toggleFavourite(item)}
                        style={styles.icon}
                        link
                        name="star"
                        color={
                          JSON.stringify(this.props.favourites).includes(
                            JSON.stringify(item)
                          )
                            ? "green"
                            : "grey"
                        }
                      />
                      {item.title}
                    </p>
                  </Grid.Column>
                  <Grid.Column>
                    <p
                      style={styles.description}
                      dangerouslySetInnerHTML={{ __html: Parser(item.body) }}
                    />
                  </Grid.Column>
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
    marginBottom: "3%",
    fontSize: "2em"
  },
  title: {
    fontSize: "1.4em"
  },
  icon: {
    marginRight: "3%"
  },
  description: {
    fontSize: "1.2em"
  }
};

export default Lookup;
