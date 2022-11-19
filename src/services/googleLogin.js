import {GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {app} from "./firebase"

async function googleLogin(){
  
   try {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    
    const { user } = await signInWithPopup(auth,provider)

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