import React from 'react';
import axios from 'axios';
var apiBaseUrl = "http://localhost:4000";
class RegistrationForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {     										   
						first_name: "",
						last_name: "",
						email: "",
						password: ""
					}
		}
	   
		handleClick(event){
			event.preventDefault(); //Used to prevent page refresh

			if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.email.length>0 && this.state.password.length>0){
				this.setState({
					first_name:this.state.first_name,
					last_name:this.state.last_name,
					email:this.state.email,
					password:this.state.password
				})
				var payload = this.state;

				// addUser(payload);
				// function addUser(details) {
				//   return fetch(apiBaseUrl+'/user', {
				//     mode: 'cors',
				//     method: 'POST',
				//     credentials: 'include',
				//     body: JSON.stringify(details),
				//     headers: {
				//       'Content-Type': 'application/json',
				//       'Accept': 'application/json'
				//     }
				//   }).then(response => {
				//   	console.log(response);
				//     return response.json().then(data => {
				//       if (response.ok) {
				//       	console.log(response);
				//         return data;
				//       } else {
				//       	console.log("error");
				//         return Promise.reject({status: response.status, data});
				//       }
				//     });
				//   }).catch(error => {
				// 		console.log(error);
				// 	});
				// }

				 axios.post(apiBaseUrl+'/user', payload)
			     	.then(function (response) {
			     	  	console.log(response);
			     	  	debugger;
				        if(response.status === 201){
					        console.log("registration successfull");
					    } else{
							console.log("some error ocurred",response.data.code);
						}
			     	})
					.catch(function (error) {
						console.log(error);
					});
			} else {
		      console.log("Input field value is missing");
		    }
		}
		render(){
			return (
				<div>
					<h2>Registration form</h2>
					<form className="form-horizontal">
						<div className="form-group">
							<label className="col-sm-3 control-label">First Name </label>
							<div className="col-sm-9">
								<input className="form-control" type="text" name="first_name" required onChange = {(event) => this.setState({first_name:event.target.value})} />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label">Last Name </label>
							<div className="col-sm-9">
								<input className="form-control" type="text" name="last_name" required onChange = {(event) => this.setState({last_name:event.target.value})} />
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label">Email</label>
							<div className="col-sm-9">
								<input className="form-control" type="text" name="email" required onChange = {(event) => this.setState({email:event.target.value})}/>
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-3 control-label">Password</label>
							<div className="col-sm-9">
								<input className="form-control" type="password" name="password" required  onChange = {(event) => this.setState({password:event.target.value})} />
							</div>
						</div>
						<div className="form-group">
							<div className="col-sm-offset-3 col-sm-9">
								<div className="checkbox">
									<label className="">
										<input type="checkbox" className="" />Remember me</label>
								</div>
							</div>
						</div>
						<div className="form-group last">
							<div className="col-sm-offset-3 col-sm-9">
								<button type="submit" className="btn btn-success btn-sm" disabled={!this.state.email} onClick={(event) => this.handleClick(event)}>Sign in</button>
								<button type="reset" className="btn btn-default btn-sm">Reset</button>
							</div>
						</div>
					</form>
				</div>
			)
		}
}
export default RegistrationForm;