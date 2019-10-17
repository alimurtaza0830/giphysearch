import React, { Component } from 'react';

class SearchBar extends Component {
	state = {
		value: ""
	}

	handleChange = (event, value) => {
		this.setState({ value: event.target.value });
	}

	handleSubmit = (event, value) => {
		event.preventDefault();
		this.props.handleApi(value);
	}


	render() {
		return (
			<div>
			<form className="form-inline my-10" onSubmit={this.handleSubmit}>
				<div className="form-group mb-2">
					<input 
						type="text"
						onChange={this.handleChange}
					/>
				</div>

				<button 
                    type="submit" 
                    className="btn btn-primary btn-sm mb-2" 
                >Submit</button>
                            
			</form>
			</div>
		);
	}
}

export default SearchBar;