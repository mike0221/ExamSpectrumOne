import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Home/home';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {primary, white} from '../../colors';
import {DrawerItem} from '../../components/DrawerItem';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useViewModel from './useViewModel';
import DetailsScreen from '../Details/details';

const Drawer = createDrawerNavigator();

const MainDrawer = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const {onSignOutPress, auth} = useViewModel({navigation});

  const drawerContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={[
          {
            backgroundColor: primary,
          },
          styles.contentContainerStyle,
        ]}>
        <View style={[styles.container, {paddingTop: statusBarHeight}]}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageIconAvatar}
              resizeMode={'cover'}
              source={{
                uri: auth?.auth_user?.photo,
              }}
            />
          </View>
          <Text style={styles.authTextName}>{auth?.auth_user?.name}</Text>
          <Text style={styles.authTextEmail}>{auth.auth_user.email}</Text>
        </View>
        <View style={styles.drawerContainer}>
          <DrawerItem
            onPress={() => navigation.navigate('Home')}
            text="PokeList"
            iconComponent={
              <View style={[styles.centerStyle, styles.imageIcon]}>
                <Feather name="smartphone" size={20} color={white} />
              </View>
            }
          />
          <DrawerItem
            onPress={onSignOutPress}
            text="Sign Out"
            iconComponent={
              <View style={[styles.centerStyle, styles.imageIcon]}>
                <AntDesign name="poweroff" size={18} color={white} />
              </View>
            }
          />
        </View>

        <View style={styles.centerStyle}>
          <Text
            style={
              styles.textColor
            }>{`© ${new Date().getFullYear()} PokeList`}</Text>
          <Text style={styles.textColor}>
            {'Created by: Michael Macalintal'}
          </Text>
        </View>
      </ScrollView>
    );
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
      }}
      initialRouteName={'Home'}
      backBehavior="history"
      drawerContent={drawerContent}>
      <Drawer.Screen name={'Home'} component={HomeScreen} />

      <Drawer.Screen
        name={'Details'}
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  centerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  imageIcon: {
    aspectRatio: 1,
    marginRight: 10,
    width: 30,
  },
  textColor: {color: 'white'},
  container: {
    flex: 1,
    backgroundColor: '#e07b7d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: white,
    overflow: 'hidden',
  },
  imageIconAvatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authTextName: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  authTextEmail: {
    color: white,
    fontSize: 16,
  },
  drawerContainer: {flex: 2, paddingTop: 20},
});

export default MainDrawer;
