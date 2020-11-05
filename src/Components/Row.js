import React from 'react';
import './Row.css'
import Button from 'react-bootstrap/Button'

function Row(props){
	function handleDelete(){
		props.removeExpense(props.index)
	}
	return(
		<tr>
			<td>{props.amount}</td>
			<td>{props.date}</td>
			<td>{props.merchant}</td>
			<td>{props.description}</td>
			<td><Button className="btn btn-danger" onClick = {handleDelete}>X</Button></td>
		</tr>
	);
}

export default Row;