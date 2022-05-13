import initializeAuthentication from './../Firebase/firebase.initialize';
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut, FacebookAuthProvider,signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";


initializeAuthentication();
const useFirebase = () =>{

        const [ user , setUser ] = useState({});
        const [ error , setError ] = useState('');
        // Auth 
        const auth = getAuth();
        //Providers are here
        const googleProvider = new GoogleAuthProvider();
        const faceBookProvider = new FacebookAuthProvider();

        // Google Login here
        const singInUsingGoogle = () =>{
            signInWithPopup( auth, googleProvider)
            .then( result =>{
                console.log(result.user)
                setUser(result.user)
            }).catch(error => {
                setError(error.massage)
            })
        }
        //ON Auth State Change are Here
        useEffect(()=>{
            onAuthStateChanged( auth, user=>{
                if( user ){
                    setUser(user);
                }
            })
        },[auth])

        // Log Out 
        const logOut = () =>{
            signOut(auth).then( () =>{
                setUser({});
            })
        }

        // Via Facebook Login system Genarate
        const singInUsingFacebook = () =>{
            signInWithPopup(auth, faceBookProvider)
            .then( result =>{
                setUser(result.user)
            }).catch( error =>{
                setError(error.massage);
            })
        }
        // Register Via Email and Password 
        const registerViaEmailandPassword = ( email, password,userName ) =>{
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateUserInformation(userName)
                setUser(user)
                logInuser(email, password)
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
        }

        // Update User Information 
        const updateUserInformation = (name) =>{
            updateProfile(auth.currentUser, {
                displayName: name
              }).then( () => {
    
              }).catch((error) => {
                // An error occurred
                // ...
              });
        }

        // User Login System Genarate 
        const logInuser = (email, password) =>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        }
        return {
            logOut,
            user,
            error,
            singInUsingGoogle,
            singInUsingFacebook,
            registerViaEmailandPassword,
            updateUserInformation,
            logInuser
        }
}


export default useFirebase;