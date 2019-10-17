import React, { Component } from 'react';
import axios from "axios";
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
    state = {
      gifs: []
    }

   handleApi = async value => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=prHxSE1nOEJG6lQoYjNJJ2W2hEFPrw02`;
    await axios.get(url)
        .then((res) => {
          console.log(res);
          this.setState({ gifs: res["data"].data });
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
      const { gifs } = this.state;
      console.log(gifs);
      return (
          <div className="container text-center">
            <SearchBar 
              handleApi={this.handleApi}
            />
          {gifs.length > 0 && <GifList gif={gifs} />}
          </div>
        );
    }
}
export default App;
