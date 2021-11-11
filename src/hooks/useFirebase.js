import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //  console.log(user);
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)

  }

  const handleRegister = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name }
        setUser(newUser)
      })
      .catch((error) => {
        setUser({})
        setError(error.message)
      });
  }

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUser(user)
      })
      .catch((error) => {
        setError(error.message);
        setUser({})
      });
  }

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {

    });
  }

  return {
    user,
    setUser,
    signInWithGoogle,
    handleRegister,
    handleLogin,
    error,
    isLoading,
    setIsLoading,
    logOut
  }
}

export default useFirebase;