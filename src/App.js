import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import EmojiResult from './Components/EmojiResult';

import filterEmoji from './filterEmoji';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredEmoji: filterEmoji('', 20),
    }
  }

  searchChange = (e) => {
    this.setState({
      filteredEmoji: filterEmoji(e.target.value, 20),
    });
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <Search textChange={this.searchChange} />
        <br/>
        <EmojiResult emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}

export default App;
