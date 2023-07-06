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
import {primary, white} from '../../colors';

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

  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
      <View style={styles.navIcons}>
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerConatainer}>
          <View style={styles.headerLabel}>
            <MiniPokemonLogo />
            <Text style={styles.label}> {data.name} </Text>
          </View>
          <View style={styles.headerBody}>
            <Image
              style={styles.imageIcon}
              resizeMode={'contain'}
              source={{
                uri: data?.sprites?.front_default,
              }}
            />
            <View style={styles.sideContainer}>
              <View style={styles.sideLabelContainer}>
                <Text style={styles.sideTextLabel}>Base Experience</Text>
                <Text style={styles.sideTextValue}>{data.base_experience}</Text>
              </View>

              <View style={styles.sideLabelContainer}>
                <Text style={styles.sideTextLabel}>Height</Text>
                <Text style={styles.sideTextValue}>{data.height}</Text>
              </View>

              <View style={styles.sideLabelContainer}>
                <Text style={styles.sideTextLabel}>Weight</Text>
                <Text style={styles.sideTextValue}>{data.weight}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.statsLabel}>Basic Stats</Text>
            <View style={styles.statsContainer}>
              {data.stats.map((item: any) => (
                <View style={styles.statsLabelContainer}>
                  <View style={styles.statsValueContainer}>
                    <Text style={styles.statsTextName}>{item?.stat.name}</Text>
                    <Text style={styles.statsTextValue}>{item?.base_stat}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.OthersConatainer}>
          <View>
            <Text>Types</Text>
            <View style={styles.featureContainer}>
              {data.types.map((item: any) => (
                <View style={styles.featureValueContainer}>
                  <Text style={styles.featureTextValue}>
                    {item?.type?.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text>Abilities</Text>
            <View style={styles.featureContainer}>
              {data.abilities.map((item: any) => (
                <View style={styles.featureValueContainer}>
                  <Text style={styles.featureTextValue}>
                    {item?.ability?.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text>Moves</Text>
            <View style={styles.featureContainer}>
              {data.moves.map((item: any) => (
                <View style={styles.featureValueContainer}>
                  <Text style={styles.featureTextValue}>
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

  OthersConatainer: {
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
  drawerIcon: {
    height: 55,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  imageIcon: {
    height: 230,
    width: 230,
  },
  navIcons: {justifyContent: 'space-between', flexDirection: 'row'},
  scrollContainer: {flexGrow: 1},
  headerBody: {alignItems: 'center', flexDirection: 'row'},
  sideContainer: {flex: 1, padding: 10},
  sideLabelContainer: {paddingVertical: 5},
  sideTextLabel: {color: 'white'},
  sideTextValue: {color: 'white', fontWeight: 'bold', fontSize: 18},
  statsLabel: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  statsContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    flexWrap: 'wrap',
  },
  statsLabelContainer: {
    width: '33.333%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  statsValueContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  statsTextName: {
    color: 'white',
    fontSize: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  statsTextValue: {color: 'white', fontWeight: 'bold'},
  featureContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  featureValueContainer: {
    padding: 10,
    backgroundColor: '#748ec2',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  featureTextValue: {textTransform: 'uppercase', color: 'white'},
});

export default DetailsScreen;
