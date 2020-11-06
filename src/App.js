import logo from './logo.svg';
import './App.css';
import Inputs from "./Components/Inputs"
import TableComp from "./Components/Table";
import React from 'react';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			expenses :  (JSON.parse(localStorage.getItem('expensesArray')) || [] )
		}
		this.addExpense = this.addExpense.bind(this);
		this.removeExpense = this.removeExpense.bind(this)
	}

	addExpense(amount, date, merchant, description){ 

		this.setState(prevState => {
			//add to the array without mutating the state
			let newExpense = [amount, date, merchant, description]
			localStorage.setItem('expensesArray', JSON.stringify([...prevState.expenses, newExpense])) 
			return{
				expenses : [...prevState.expenses, newExpense]
			}
		})
	}

	removeExpense(key){
		this.setState(prevState => {
			let expenses = [...prevState.expenses]
			expenses.splice(key, 1)
			localStorage.setItem('expensesArray', JSON.stringify(expenses))
			return{
				expenses: expenses
			}
		})
	}

	render() {
		let storage = JSON.parse(localStorage.getItem('expensesArray'));
		console.log(storage)
		return (
    		<div>
      			<Inputs addExpense = {this.addExpense}/>
      			<TableComp expenses = {this.state.expenses} removeExpense = {this.removeExpense}/>
    		</div>
    	);
	}
 
}

export default App;
