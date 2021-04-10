import React, { Component }from 'react';
import CardList from '../components/CardList';
import SearchBox from'../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component
{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(user=>this.setState({robots:user}));
	}
	onSearchChange=(event)=>
	{
		this.setState({searchfield:event.target.value});
	}
	render()
	{
		const filterRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	
		})
		if(this.state.robots.length===0)
		{
			return(
				<h1>loading</h1>);
		}
		else{
		return(
		<div className='tc'>
		<h1 className='f1'>ROBOTS</h1>
		<SearchBox searchChange={this.onSearchChange} />
		<Scroll>
		<CardList robots={ filterRobots } />
		</Scroll>
		</div>
		);
	}
	}
	
}

export default App;