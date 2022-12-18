import {GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {app,db} from "./firebase"
import { doc, setDoc } from "firebase/firestore"; 

async function googleLogin(){
  
   try {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    const { user } = await signInWithPopup(auth,provider)

    // Adding user details in collection "users"
    await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      await setDoc(doc(db, "users-chat", user.uid),{})

    //returning user details after login
    return {
        uid: user.uid,
        userName: user.displayName,
        profile: user.photoURL
    }
    
   } catch (error) {
    
    if (error.code !== 'auth/cancelled-popup-request') {
        console.error(error);
    }
   }

}

export default googleLogin;