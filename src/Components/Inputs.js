import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Inputs.css'

function Inputs (props){
 let expenseAdded = (e) => {
 		e.preventDefault();
		let amount = document.getElementById('number').value;
		let date = document.getElementById('date').value;
		let merchant = document.getElementById('merchant').value;
		let description = document.getElementById('description').value;
		document.getElementById('form').reset();
		props.addExpense(amount, date, merchant, description)
	}
	return(
		<div>
			<Form id = 'form' onSubmit ={expenseAdded}>
				<div className="inputs-container">
					<div className="form-group">
						<label>Amount</label>
						<input className = "form-control" id = "number" type = "number" required />
					</div>
					
					<div className="form-group">
						<label>Date</label>
						<input className = "form-control" id = "date" type = "date" required />
					</div>

					<div className="form-group">
						<label>Merchant</label>
						<input className = "form-control" id = "merchant" type = "text" required />
					</div>

					<div className="form-group">
						<label>Description</label>
						<input className = "form-control" id = "description" type = "text"required />
					</div>
					<div className="">
						<Button id = "submit" type = "submit">Submit</Button>
					</div>
				</div>
			</Form>
		</div>
	);	
}

export default Inputs;