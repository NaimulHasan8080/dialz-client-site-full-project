import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //  console.log(user);
      if (user) {
        setUser(user)
        setIsLoading(true)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, []);


  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const users = { email: user.email, displayName: user.displayName };
        fetch('http://localhost:5000/users', {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(users)
        })
          .then()

        setError('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      }).catch((error) => {
        setError(error.message);
      }).finally(() => setIsLoading(false));
  }

  const handleRegister = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name }
        setUser(newUser)
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {

        }).catch((error) => {

        });
        history.replace('/home')
      })
      .catch((error) => {
        setUser({})
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
  }

  const handleLogin = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/home';
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
        setUser({})
      })
      .finally(() => setIsLoading(false));
  }

  //check admin 
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user?.email])


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
    admin,
    logOut
  }
}

export default useFirebase;