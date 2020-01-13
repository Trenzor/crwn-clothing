import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import SignIn from '../sign-in/sign-in.component';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <div>
            <SignIn />
        </div>
    </div>
);

export default SignInAndSignUpPage;