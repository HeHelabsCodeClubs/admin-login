import isEmpty from 'lodash.isempty';
import React, { Component } from 'react';
import RenderErrors from 'errors-render-component';
import './style.css';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitting: false,
            validationErrors: {},
            buttonText: ''
        };
        this.renderErrors = this.renderErrors.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        const { 
            errors, 
            formSubmitting, 
            submitButtonText 
        } = nextProps;
        if (!isEmpty(errors)) {
            if (validationErrors !== errors) {
                this.setState({
                    validationErrors: errors
                });
            }
        }
        if (formSubmitting !== false) {
            if(formSubmitting !== this.state.formSubmitting) {
                this.setState({
                    formSubmitting: formSubmitting
                });
            }
        }
        if (submitButtonText !== this.state.buttonText) {
            this.setState({
                buttonText: submitButtonText
            });
        }
    }
    renderErrors(errors) {
        return <RenderErrors errorData={errors} />
    }

    render() {
        const { 
            handleSubmit,
            loginLeftClass,
            loginRightClass,
            companyLogo,
            inputClass,
            submitButtonClass,
            loginMessage,
            submit,
            forgotPasswordPageRedirection,
            emailField,
            passwordField,
            rememberMeField,
        } = this.props
        const { validationErrors, formSubmitting, buttonText } = this.state;
        const buttonDisableState = formSubmitting ? true : false;
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
                                <form onSubmit={handleSubmit(submit)}>
                                    <div className={inputClass}>
                                        {emailField}
                                    </div>
                                    <div className={inputClass}>
                                        {passwordField}
                                    </div>
                                    <div className="login-actions">
                                        {rememberMeField}
                                        <span className="remember-me">Remember me</span>
                                        <span className="forgot-password">
                                            <a
                                            onClick={() => forgotPasswordPageRedirection()}
                                            >
                                                Forgot Password
                                            </a>
                                        </span>
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

export default AdminLogin;