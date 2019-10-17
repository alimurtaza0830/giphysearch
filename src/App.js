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
          // console.log(res.data);
          this.setState({ gifs: res.data});
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
      let { data } = this.state.gifs;
      console.log(data);
      return (
          <div className="container text-center">
            <SearchBar 
              handleApi={this.handleApi}
            />
            <GifList gif={data}/> 
          </div>
        );
      }
}
export default App;
