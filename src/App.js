import React, {Component} from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
    monsters:[],
    searchField:''
    };
    }
    
    handleChange= e => {
      this.setState({searchField: e.target.value});
    };
    

    render(){
      
      const { monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return(
      <div className="App">
       <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
          />
        <CardList monsters ={filteredMonsters}>
        
        </CardList>
      </div>
      );
      }

      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users => this.setState({monsters: users}));
        }
        
      



      
}

export default App;
