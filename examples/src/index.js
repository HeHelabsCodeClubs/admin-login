import React from 'react';
import { render} from 'react-dom';
import AdminLogin from '../../src';

function getValues(values) {
    console.log(values);
}


const App = () => (
    <AdminLogin
    loginLeftClass="landing-left"
    loginRightClass="landing-right"
    companyLogo="https://res.cloudinary.com/hehe/image/upload/v1535021246/Iposita/EMS_logo2.png"
    inputClass="input-area"
    submitButtonClass="submit-button"
    loginMessage="login-message"
    handleSubmit={() => console.log('handle submit')}
    submit={() => getValues}
    forgotPasswordPageRedirection={() => console.log('forgot password redirection')}
    />
);
render(<App />, document.getElementById("root"));