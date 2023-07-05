import {useDispatch, useSelector} from 'react-redux';
import useAuthGoogle from '../../hooks/useAuthGoogle';
import {logout} from '../../redux/actions/authAction';

const useViewModel = ({navigation}: any) => {
  const {handleSignOut} = useAuthGoogle();
  const dispatch = useDispatch();

  const onSignOutPress = async () => {
    handleSignOut();
    await dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const auth = useSelector((state: any) => state.auth);

  return {onSignOutPress, auth};
};

export default useViewModel;
