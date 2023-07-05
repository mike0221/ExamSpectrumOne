import {
  Image,
  ScrollView,
  // FlatList,
  // Image,
  // RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {black, primary, white} from '../../colors';

import MiniPokemonLogo from '../../components/miniLogo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import useViewModel from './useViewModel';

const DetailsScreen = ({navigation, route}: any) => {
  // const {data, fetchNextPage, isLoading, isFetching, handleRefresh} =
  //   useViewModel();
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  const data = route.params.customData;
  console.log('routes', data);

  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.drawerIcon}>
          <EvilIcons name="navicon" size={30} color={white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.drawerIcon}>
          <AntDesign name="close" size={30} color={white} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.headerConatainer}>
          <View style={styles.headerLabel}>
            <MiniPokemonLogo />
            <Text style={styles.label}> {data.name} </Text>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image
              style={styles.imageIcon}
              resizeMode={'contain'}
              source={{
                uri: data?.sprites?.front_default,
              }}
            />
            <View style={{flex: 1, padding: 10}}>
              <View style={{paddingVertical: 5}}>
                <Text style={{color: 'white'}}>Base Experience</Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                  {data.base_experience}
                </Text>
              </View>

              <View style={{paddingVertical: 5}}>
                <Text style={{color: 'white'}}>Height</Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                  {data.height}
                </Text>
              </View>

              <View style={{paddingVertical: 5}}>
                <Text style={{color: 'white'}}>Weight</Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                  {data.weight}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Basic Stats
            </Text>
            <View
              style={{
                flex: 3,
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 20,
                flexWrap: 'wrap',
              }}>
              {data.stats.map((item: any) => (
                <View
                  style={{
                    width: '33.333%',
                    alignItems: 'center',
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 40,
                      borderColor: 'white',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 10,
                        textTransform: 'uppercase',
                        textAlign: 'center',
                      }}>
                      {item?.stat.name}
                    </Text>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      {item?.base_stat}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.loginConatainer}>
          <View>
            <Text>Types</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {data.types.map((item: any) => (
                <View
                  style={{
                    padding: 10,
                    backgroundColor: '#748ec2',
                    marginVertical: 5,
                    marginHorizontal: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{textTransform: 'uppercase', color: 'white'}}>
                    {item?.type?.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text>Abilities</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {data.abilities.map((item: any) => (
                <View
                  style={{
                    padding: 10,
                    backgroundColor: '#748ec2',
                    marginVertical: 5,
                    marginHorizontal: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{textTransform: 'uppercase', color: 'white'}}>
                    {item?.ability?.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text>Moves</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {data.moves.map((item: any) => (
                <View
                  style={{
                    padding: 10,
                    backgroundColor: '#748ec2',
                    marginVertical: 5,
                    marginHorizontal: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{textTransform: 'uppercase', color: 'white'}}>
                    {item?.move?.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  headerConatainer: {
    paddingHorizontal: 20,
    flex: 4,
    justifyContent: 'flex-start',
  },
  headerLabel: {
    flexDirection: 'row',
  },
  headerText: {
    color: 'white',
    fontSize: 14,
    paddingVertical: 10,
  },
  loginConatainer: {
    flex: 1,
    backgroundColor: white,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 20,
    paddingVertical: 10,
  },
  label: {
    fontSize: 25,
    color: white,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textTransform: 'uppercase',
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
  drawerIcon: {
    height: 55,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  labelLoading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: black,
  },
  renderContainer: {
    marginTop: 10,
    height: 130,
    justifyContent: 'flex-end',
  },
  flatContainer: {flex: 1},
  listContainer: {
    backgroundColor: '#bfc2c7',
    width: '100%',
    height: 100,
    borderRadius: 15,
    padding: 10,
    paddingHorizontal: 20,
  },
  itemTextID: {
    fontSize: 16,
    fontWeight: 'bold',
    color: black,
  },
  itemTextName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: white,
  },
  imageContainer: {
    position: 'absolute',
    height: 130,
    width: 130,
    right: 20,
  },
  imageIcon: {
    height: 230,
    width: 230,
  },
});

export default DetailsScreen;
