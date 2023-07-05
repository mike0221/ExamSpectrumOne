import {
  FlatList,
  Image,
  RefreshControl,
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

import useViewModel from './useViewModel';

const HomeScreen = ({navigation}: any) => {
  const {data, fetchNextPage, isLoading, isFetching, handleRefresh} =
    useViewModel();
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
        style={styles.drawerIcon}>
        <EvilIcons name="navicon" size={30} color={white} />
      </TouchableOpacity>
      <View style={styles.headerConatainer}>
        <View style={styles.headerLabel}>
          <MiniPokemonLogo />
          <Text style={styles.label}> POKELIST </Text>
        </View>
        <View>
          <Text style={styles.headerText}>
            This is the list of Pokemon base on the {'\n'}Pokemon API
          </Text>
          <Text style={styles.headerText}>
            SpectrumOne Techinical Examination
          </Text>
        </View>
      </View>
      <View style={styles.loginConatainer}>
        {isLoading && <Text style={styles.labelLoading}>Loading...</Text>}

        <FlatList
          data={data?.pages.flatMap(page => page.pokemonData)}
          style={styles.flatContainer}
          onEndReached={() => fetchNextPage()}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={handleRefresh} />
          }
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({
                  name: 'Details',
                  params: item,
                });
              }}>
              <View style={styles.renderContainer}>
                <View style={styles.listContainer}>
                  <Text style={styles.itemTextID}>No.{item.id}</Text>
                  <Text style={styles.itemTextName}>{item?.name}</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.imageIcon}
                    resizeMode={'contain'}
                    source={{
                      uri: item.picture,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
    flex: 2,
    justifyContent: 'center',
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
    flex: 6,
    justifyContent: 'center',
    backgroundColor: white,
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
    height: 130,
    width: 130,
  },
});

export default HomeScreen;
