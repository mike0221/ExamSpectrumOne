import {StyleSheet, View} from 'react-native';

const MiniPokemonLogo = () => {
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
    height: 70 * 0.3,
    width: 150 * 0.3,
    borderTopRightRadius: 25 * 0.3,
    borderTopLeftRadius: 25 * 0.3,
    backgroundColor: 'red',
    borderBottomWidth: 9 * 0.3,
  },
  midContainer: {
    height: 50 * 0.3,
    width: 50 * 0.3,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 50 * 0.3,
    borderWidth: 9 * 0.3,
    left: 50 * 0.3,
    top: 45 * 0.3,
  },
  bottomContainer: {
    borderTopWidth: 9 * 0.3,
    height: 70 * 0.3,
    width: 150 * 0.3,
    borderBottomRightRadius: 25 * 0.3,
    borderBottomLeftRadius: 25 * 0.3,
    backgroundColor: 'white',
  },
});
export default MiniPokemonLogo;
