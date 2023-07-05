import {StyleSheet, View} from 'react-native';

const PokemonLogo = () => {
  return (
    <View>
      <View style={styles.upperContainer} />
      <View style={styles.bottomContainer} />
      <View style={styles.midContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    height: 70,
    width: 150,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: 'red',
    borderBottomWidth: 9,
  },
  midContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 9,
    left: 50,
    top: 45,
  },
  bottomContainer: {
    borderTopWidth: 9,
    height: 70,
    width: 150,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: 'white',
  },
});
export default PokemonLogo;
