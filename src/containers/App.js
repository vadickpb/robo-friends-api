import React from 'react'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'

import './App.css';

class App extends React.Component{
    
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots : users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })   
    }
    render(){
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

         return !robots.length ?
             <h1 className="tc">Loading</h1> :
            (
                <div className="tc">
                    <h1 className = "f2" >RoboFriends App</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filterRobots}/>
                    </Scroll>
                </div>
            )
    };
}

export default App;