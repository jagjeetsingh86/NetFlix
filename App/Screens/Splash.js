import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.Image}
        source={require('../Src/Images/Vector1.png')}
      />
      {/* <Button title="move" onPress={() => navigation.navigate('UserName')} /> */}
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  Image: {
    width: '70%',
    height: '23%',
    resizeMode: 'contain',
  },
});
