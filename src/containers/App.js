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
        const filterRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()));

        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
            
            return (
                <div className="tc">
                    <h1 className = "f2" >RoboFriends App</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filterRobots}/>
                    </Scroll>
                </div>
            )
        }
    };
}

export default App;