import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {GOOGLE_WEB_CLIENT_ID} from '../config/config';
import {useState} from 'react';

const useAuthGoogle = () => {
  const [user, setUser] = useState<any>();
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const handleGoogleSignIn = async () => {
    try {
      GoogleSignin.configure({
        offlineAccess: false,
        webClientId: GOOGLE_WEB_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
      auth().signInWithCredential(googleCredentials);
      setUser(userInfo.user);
      setLoggedIn(true);
      return {user: userInfo.user};
    } catch (error) {
      console.log('=> Google Sign In', error);
      setLoggedIn(false);
      return {user: null};
    }
  };

  const handleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    } catch (error) {
      console.error(error);
    }
  };

  return {handleGoogleSignIn, handleSignOut, user, isLoggedIn};
};

export default useAuthGoogle;
