import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/Card-list-components';
import SearchBox from './components/search-box/Search-box-component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users }, () => {
          console.log(this.state);
        });
      });
  }

  onSearchChange = (e) => {
    console.log(e.target.value);
    const searchField = e.target.value.toLowerCase();
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filter = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/* <input className="search-box" type="search" onChange={onSearchChange} />
         */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monster"
          className="search-box"
        />
        <CardList monsters={filter} />
      </div>
    );
  }
}

export default App;
