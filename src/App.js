import React, { Component } from "react";
import "./App.css";

import Banner from "./components/Banner";
import Lookup from "./components/Lookup";
import Favourites from "./components/Favourites";

class App extends Component {
  state = {
    favourites: []
  };

  toggleFavourite = fav => {
    if (JSON.stringify(this.state.favourites).includes(JSON.stringify(fav))) {
      this.state.favourites.some(savedFav => {
        if (savedFav.title === fav.title) {
          var array = [...this.state.favourites]; // make a separate copy of the array
          var index = this.state.favourites.indexOf(savedFav);
          if (index !== -1) {
            array.splice(index, 1);
            this.setState({ favourites: array }, () =>
              console.log(this.state.favourites)
            );
          }
        }
        return null;
      });
    } else {
      this.setState(
        prevState => ({
          favourites: [...prevState.favourites, fav]
        }),
        () => console.log(this.state.favourites)
      );
    }
  };

  render() {
    return (
      <div>
        <Banner />
        <Lookup
          favourites={this.state.favourites}
          toggleFavourite={this.toggleFavourite}
        />
        <Favourites
          favourites={this.state.favourites}
          toggleFavourite={this.toggleFavourite}
        />
      </div>
    );
  }
}

export default App;
