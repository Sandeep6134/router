
import './App.css';
import React,{Component} from 'react';
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-bar/search-bar'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){
    const {monsters,searchField} = this.state;
    console.log(monsters,searchField)
    const filtered = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div> 
      <SearchBox placeholder="search monsters" handleChange={e=>this.setState({searchField: e.target.value})}></SearchBox>
      <CardList monsters={filtered}></CardList>
    </div>


  );
}
}

export default App;
