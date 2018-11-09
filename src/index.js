import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import RenderErrors from 'errors-render-component';
import RenderField from 'render-field';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Login',
            validationErrors: {}
        };
        this.renderErrors = this.renderErrors.bind(this);
    }
    submit(values) {

    }
    renderErrors(errors) {
        return <RenderErrors errorData={errors} />
    }
    renderField(field){
        return (
            <RenderField fieldInput={field}/>
        )
    }
    render() {
        const { 
            handleSubmit,
            loginLeftClass,
            loginRightClass,
            companyLogo,
            inputClass,
            submitButtonClass,
            loginMessage
        } = this.props
        const { validationErrors, buttonText } = this.state;
        const buttonDisableState = buttonText === 'Login' ? false : true;
        return (
            <div className="landing-container">
                <div className="row landing-wrapper">
                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 col-reset">
                        <div className={loginLeftClass}>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-reset">
                        <div className={loginRightClass}>
                        <div className="form-container login-container">
                            <div className="company-logo">
                                <img src={companyLogo} className='comp-logo' />
                                </div>
                                <div className={loginMessage}>Welcome back! Please login to your account</div>
                                {this.renderErrors(validationErrors)}
                                <form onSubmit={handleSubmit(this.submit)}>
                                    <div className={inputClass}>
                                        <Field 
                                        name="email"
                                        label="Email"
                                        type="input"
                                        kind="text"
                                        placeholder="Email"
                                        component={this.renderField} 
                                        />
                                    </div>
                                    <div className={inputClass}>
                                        <Field 
                                        name="password"
                                        label="Password"
                                        type="input"
                                        kind="password"
                                        placeholder="password"
                                        component={this.renderField} 
                                        />
                                    </div>
                                    <div className="login-actions">
                                        <Field 
                                        name="rememberme"
                                        type="input"
                                        kind="checkbox"
                                        component={this.renderField} 
                                        />
                                        <span className="remember-me">Remember me</span>
                                        <span className="forgot-password"><Link to="/forgot">Forgot Password</Link></span>
                                    </div>
                                    <div className={submitButtonClass}>
                                        <button 
                                        type="submit"
                                        className="save login-btn"
                                        disabled={buttonDisableState}
                                        >
                                        {buttonText}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required!';
    }

    if (!values.password) {
        errors.password = "Password is required";
    }
    return errors;
}

export default AdminLogin = reduxForm({
    validate,
    form: 'loginform'
})(AdminLogin);