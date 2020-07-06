import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import CardList from './components/CardList/CardList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      figures: [],
      searchField: '',
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const uri = encodeURI(
      'https://rebrickable.com/api/v3/lego/minifigs/?page=10&page_size=10'
    );
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'key 1883c7105430b6bd90ea9781f9e3ac8e',
    };

    axios
      .get(uri, { headers })
      .then((response) => {
        console.log(response.data);
        return response.data.results;
      })
      .then((figures) => this.setState({ figures }));

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => res.json())
    //   .then((users) => this.setState({ figures: users }));
  }

  onChangeSearch = (e) => {
    const value = e.target.value;
    this.setState({ searchField: value }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { figures, searchField } = this.state;

    const filteredFigures = figures.filter((figure) =>
      figure.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className='App'>
        <h1> Mundo Legos </h1>
        <SearchBox
          placeholder='Search for figures'
          handleChange={this.onChangeSearch}
        />

        <CardList figures={filteredFigures}></CardList>
      </div>
    );
  }
}

export default App;
