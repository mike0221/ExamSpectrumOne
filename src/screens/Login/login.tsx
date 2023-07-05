import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {black, primary, white} from '../../colors';
import PokemonLogo from '../../components/logo';
import useViewModel from './useViewModel';

const LoginScreen = ({navigation}: any) => {
  const {onSignInPress} = useViewModel({navigation});
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
      <View style={styles.logoConatainer}>
        <PokemonLogo />
        <Text style={styles.label}> POKELIST </Text>
      </View>
      <View style={styles.loginConatainer}>
        <Text style={styles.loginText}> Login with </Text>
        <TouchableOpacity onPress={onSignInPress} style={styles.loginButton}>
          <Text style={styles.loginLabel}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  logoConatainer: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loginConatainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: white,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  label: {
    fontSize: 20,
    color: white,
    alignSelf: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },
  loginText: {
    alignSelf: 'center',
    paddingBottom: 19,
    color: black,
    fontSize: 14,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'red',
  },
  loginLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
