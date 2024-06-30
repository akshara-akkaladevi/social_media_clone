import React, {useState} from "react";
import { signup } from "../../Backend";
import './Signup.css';

function Signup() {

    const [formValues, setFormValues] = useState({
        email: "",
        name: "",
        password: "",
        error: "",
        loading: false,
        success: false,
    });

    const { name, email, password, error, loading, success } = formValues;

    const handleChange = name => event => {
        setFormValues({ ...formValues, error: false, [name]: event.target.value });
    }

    const onSubmit = async event => {
        event.preventDefault();
        setFormValues({ ...formValues, success: false, loading: true });

        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setFormValues({ ...formValues, error: data.error, loading: false, success: false });
                } else {
                    setFormValues({ ...formValues, success: true });
                }
            })
            .catch();
    }

    const errorMessage = () => {
        return (
            <div className='error-message' style={{ display: error ? "" : "none", color: "red" }}>
                {error}
            </div>
        );
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="loading-message" style={{ display: error ? "" : "none", color: "red" }}>
                    <div className="loading-spinner"></div>
                    <p>Loading...</p>
                </div>
            )
        );
    }

    const successMessage = () => {
        return (
            success && (
                <div>
                    <center><p className='login_redirect mt-2'>Account created successfully <b><a href='/signin'>Login here</a></b></p></center>
                </div>
            )
        );
    }


   
    return (
        <div className='form-container'>
            <div className='form-box'>
                <h2>Create an account</h2>
                {errorMessage()}
                {loadingMessage()}
                {successMessage()}
                <div className='form-group'>
                    <label htmlFor="name">Username</label>
                    <input type="text" id="name" name="name" onChange={handleChange("name")} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleChange("email")} required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleChange("password")} required />
                </div>
                <div className="form-group-button">
                    <button onClick={onSubmit}>Signup</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;