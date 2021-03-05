import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Form.css';


 const  Form = () => {
    return (
        <div className="sign-in-container">
        <div className="sign-in-template">
            <h3>Sign in To go to Dashboard</h3>
   <button className="btn btn-danger "><i class="fab fa-google"></i>Sign In with Google</button>
   <button className="btn btn-primary"><FacebookIcon/>Sign In with Facebook</button>
   </div>
   </div>
    );
}

export default Form;

