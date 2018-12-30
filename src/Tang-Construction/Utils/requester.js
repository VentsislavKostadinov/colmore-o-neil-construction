
import $ from 'jquery';
//import jquery from '/node_modules/jquery/dist/jquery.min';

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_BJaotVk0X";
    const kinveyAppSecret = "92cb9318e2a147b6b007059d78d228ec";

    // Creates the authentication header
    function makeAuth(type) {
        return type === 'basic'
            ?  'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
            :  'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    // Creates request object to kinvey.com
    // module - user
    // endpoint - (login)
    // auth - (Basic with App credentials or Kinvey (user credentials))
    // data - username and password
    function makeRequest(method, module, endpoint, auth) {
        return  {
            method,
            url: kinveyBaseUrl + module + '/' + kinveyAppKey + '/' + endpoint,
            headers: {
                'Authorization': makeAuth(auth)
            },

        //    error: errorLogin,

        };

     /*   function errorLogin() {

            alert("Username or passwords are incorrect!");
        } */
    }

    // Function to return GET promise
    function get (module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    // Function to return POST promise
    function post (module, endpoint, auth, data) {
        let req = makeRequest('POST', module, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    // Function to return PUT promise
    function update (module, endpoint, auth, data) {
        let req = makeRequest('PUT', module, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    // Function to return DELETE promise
    function remove (module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }
    export default {
        get,
        post,
        update,
        remove
    }
