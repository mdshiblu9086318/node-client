import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Config/firebase.config';
import googleIcon from '../../images/google.png'
import './Login.css'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig)
        }

        const googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email,
                    photoURL
                }
                setLoggedInUser(signedInUser)
                history.replace(from)
            })
    }
    return (
        <div className="container">
            <div onClick={handleGoogleSignIn} className="google-pop-up">
                <div className="d-flex">
                    <img src={googleIcon} alt="" />
                    <button>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;