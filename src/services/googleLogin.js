import {GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

async function googleLogin(){
  
   try {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    
    const { user } = await signInWithPopup(auth,provider)

    return {uid:user.uid, userName:user.displayName}
    
   } catch (error) {

    if (error.code !== 'auth/cancelled-popup-request') {
        console.error(error);
    }
   }

}

export default googleLogin;