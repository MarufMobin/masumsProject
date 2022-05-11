import initializeAuthentication from './../Firebase/firebase.initialize';
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut, FacebookAuthProvider } from "firebase/auth";


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
                    console.log("insite State Change", user)
                    setUser(user);
                }
            })
        },[])

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

        return {
            logOut,
            user,
            error,
            singInUsingGoogle,
            singInUsingFacebook
        }
}


export default useFirebase;