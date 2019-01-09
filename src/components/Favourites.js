import React, { Component } from "react";

import { Header, Container, Grid, Icon } from "semantic-ui-react";
import Parser from "html-react-parser";

class Favourites extends Component {
  render() {
    return (
      <div style={styles.background}>
        <Container>
          <Header style={styles.headerText} size="huge">
            Favourites
          </Header>
          <Grid divided="vertically">
            {this.props.favourites &&
              this.props.favourites.map(item => (
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
  background: {
    marginTop: "2%",
    background: "#f7fefa",
    padding: "2% 0"
  },
  headerText: {
    color: "#25995e",
    marginBottom: "2%"
  },
  title: {
    fontSize: "1.4em"
  },
  icon: {
    marginRight: "3%"
  }
};

export default Favourites;
