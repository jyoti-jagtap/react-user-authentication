import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectIssue} from '../actions/index';
import axios from 'axios';
var apiBaseUrl = "http://localhost:4000";

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}
	handleClick(event){
		
		var self = this;
		var payload={
			"email":this.state.email,
			"password":this.state.password
		}
		axios.post(apiBaseUrl+'/user', payload)
		.then(function (response) {
			console.log(response);
			if(response.data.code == 200){
				console.log("Login successfull");
			}
			else if(response.data.code == 204){
				console.log("Username password do not match");
				alert("username password do not match")
			}
			else{
				console.log("Username does not exists");
				alert("Username does not exist");
			}
		})
		.catch(function (error) {
			console.log(error);
		});
	}


	
	render() {
		return(
				<div>
					<h2>Login form</h2>
					<form role="form" className="form-horizontal"  onClick={(event) => this.handleClick(event)}>
						<div className="form-group">
							<label className="col-sm-3 control-label">Username</label>
							<div className="col-sm-9">
								<input className="form-control" type="email"  name="email" onChange = {(event) => this.setState({email:event.target.value})}/>
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label">Password</label>
							<div className="col-sm-9">
								<input className="form-control" type="password" name="password" onChange = {(event) => this.setState({password:event.target.value})}/>
							</div>
						</div>
						<div className="form-group last">
							<div className="col-sm-offset-3 col-sm-9">
								<button type="submit" className="btn btn-success btn-sm">Sign in</button>
								<a href="#">Register Here</a>
							</div>
						</div>
					  </form>					  
				</div>
		);
	}
}
function mapStateToProps(state){
	return {
		issues: state.issues
	}
	
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectIssue:selectIssue},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
	