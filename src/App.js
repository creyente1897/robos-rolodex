import React from 'react'

import './App.css'

import { CardList } from './components/card-list/card-list.component'

import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component{
  
  constructor(){
    super()

    this.state = {
      robos: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => this.setState({ robos: users }))
  }

  render() {
    const {robos, searchField} = this.state
    const filteredRobos =  robos.filter(robo => 
      robo.name.toLowerCase().includes(searchField.toLocaleLowerCase())  
    )
    return (
      <div className="App">
        <h1> Robos Rolodex </h1>
        <SearchBox 
          placeholder='search robos'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList robos = {filteredRobos} />
      </div>
    );
  }
}


export default App;
