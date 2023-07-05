import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import LoginScreen from '../screens/Login/login';
import MainDrawer from '../screens/MainDrawer/mainDrawer';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const auth = useSelector((state: any) => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName={auth?.auth_user?.id ? 'MainDrawer' : 'Login'}>
      <Stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'MainDrawer'}
        component={MainDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
