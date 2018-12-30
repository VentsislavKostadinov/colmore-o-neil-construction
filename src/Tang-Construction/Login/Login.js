import React, {Component} from 'react';
import './Login.css';
import requester from "../Utils/requester";
import Observer from '../Utils/Observer';


export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null
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
   //     e.target.reset();

        requester.post('user', 'login', 'basic', this.state)
            .then((res) => {

                Observer.trigger(Observer.events.loginUser, res.username);
                sessionStorage.setItem('authtoken', res._kmd.authtoken);
                this.props.history.push('/login');

            });


        this.inputUsernameLogin.value = '';
           this.inputPasswordLogin.value = '';

           const {username, password} = this.state;

        if(username !== password) {
            alert("Passwords don't match");
          return;
        }
    }

    render() {

        return(

            <form className = 'col-lg-4 col-sm-6' onSubmit={this.handleSubmit} >

                <h1 className= 'text-center'>Please login</h1>

                <div className = 'form-group'>
                    <div className = 'input-group-prepend mb-2 mr-sm-2'>
                        <label htmlFor= 'loginUsername' />
                        <input type = 'text' onChange={this.handleChange} className = 'form-control border-right-0' id='loginUsername' name = 'username' ref={(inputUsernameLogin) => this.inputUsernameLogin = inputUsernameLogin}/>
                           <div className='input-group-prepend'>
                              <div className = 'input-group-text bg-white border-left-0'><i className='fas fa-user' /></div>
                           </div>
                    </div>
                </div>

                <div className = 'form-group'>
                    <div className = 'input-group-prepend mb-2 mr-sm-2'>
                        <label htmlFor= 'password' />
                        <input type = 'password' onChange={this.handleChange} className = 'form-control border-right-0' id='password' name = 'password' ref={(inputPasswordLogin) => this.inputPasswordLogin = inputPasswordLogin}/>
                        <div className='input-group-prepend'>
                            <div className = 'input-group-text bg-white border-left-0'><i className='fas fa-key' /></div>
                        </div>
                    </div>
                </div>

                <input type="submit" className= 'btn btn-info' value="Login" />
            </form>
        )
    }
}


