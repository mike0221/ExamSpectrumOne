//import useAuthGoogle from '../../hooks/useAuthGoogle';

import {useDispatch} from 'react-redux';
import useAuthGoogle from '../../hooks/useAuthGoogle';
import {login, logout} from '../../redux/actions/authAction';

const useViewModel = ({navigation}: any) => {
  const {handleGoogleSignIn, handleSignOut} = useAuthGoogle();
  const dispatch = useDispatch();

  const onSignInPress = async () => {
    const user = handleGoogleSignIn();
    await user.then(async (data: any) => {
      await dispatch(login(data));

      navigation.reset({
        index: 0,
        routes: [{name: 'MainDrawer'}],
      });
    });
  };

  const onSignOutPress = async () => {
    handleSignOut();
    await dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return {
    onSignInPress,
    onSignOutPress,
  };
};

export default useViewModel;
