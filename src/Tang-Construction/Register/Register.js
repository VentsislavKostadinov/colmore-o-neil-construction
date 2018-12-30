import React, {Component} from 'react';

import requester from "../Utils/requester";
import Observer from "../Utils/Observer";


export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            repeatPassword: null

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(e) {

        let fieldName = e.target.name;
        let fieldValue = e.target.value;

        this.setState({[fieldName]: fieldValue});


    }



    handleSubmit(e) {

        e.preventDefault();

        const { password, repeatPassword} = this.state;

        if(password !== repeatPassword) {
            alert("Passwords don't match");

        } else {

            requester.post('user', '', 'basic', this.state)
            //.then(console.log);

            .then((res) => {
                Observer.trigger(Observer.events.loginUser, res.username);
                sessionStorage.setItem('authtoken', res._kmd.authtoken);

            });



        this.inputUsernameRegister.value = '';
        this.inputUsernamePassword.value = '';
        this.inputUsernameRepeatPassword.value = '';


        } // else close bracket
    }

    render() {

        return(

            <form className = 'col-lg-4 col-sm-6' onSubmit={this.handleSubmit}>

                <h1 className= 'text-center'>Please Register</h1>

                <div className = 'form-group'>
                    <div className = 'input-group-prepend mb-2 mr-sm-2'>
                        <label htmlFor= 'registerUsername' />
                        <input type = 'text' onChange={this.handleChange}  className = 'form-control border-right-0' id='registerUsername' name = 'username' required ref={(inputUsernameRegister) => this.inputUsernameRegister = inputUsernameRegister}/>
                        <div className='input-group-prepend'>
                            <div className = 'input-group-text bg-white border-left-0'><i className='fas fa-user' /></div>
                        </div>
                    </div>
                </div>


                <div className = 'form-group'>
                    <div className = 'input-group-prepend mb-2 mr-sm-2'>
                        <label htmlFor= 'password' />
                        <input type = 'password' onChange={this.handleChange} className = 'form-control border-right-0' id='password' name = 'password' required ref={(inputUsernamePassword) => this.inputUsernamePassword = inputUsernamePassword}/>
                        <div className='input-group-prepend'>
                            <div className = 'input-group-text bg-white border-left-0'><i className='fas fa-key' /></div>
                        </div>
                    </div>
                </div>

                <div className = 'form-group'>
                    <div className = 'input-group-prepend mb-2 mr-sm-2'>
                        <label htmlFor= 'repeatPassword' />
                        <input type = 'password' onChange={this.handleChange} className = 'form-control border-right-0' id='repeatPassword' name = 'repeatPassword' required  ref={(inputUsernameRepeatPassword) => this.inputUsernameRepeatPassword = inputUsernameRepeatPassword}/>
                        <div className='input-group-prepend'>
                            <div className = 'input-group-text bg-white border-left-0'><i className='fas fa-key' /></div>
                        </div>
                    </div>
                </div>


                <input type="submit" className= 'btn btn-info' value="Register" />
            </form>
        )
    }
}