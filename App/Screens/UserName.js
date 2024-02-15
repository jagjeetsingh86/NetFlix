import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {scaleSize} from './Size';

const UserName = ({navigation}) => {
  profileData1 = [
    {Title: 'Sahil', Source: require('../Src/Images/Rectangle2.png')},
    {Title: 'Jagjeet', Source: require('../Src/Images/Rectangle3.png')},
  ];
  profileData2 = [
    {Title: 'Nishan', Source: require('../Src/Images/Rectangle4.png')},
    {Title: 'Amit', Source: require('../Src/Images/Rectangle5.png')},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.NetflixView}>
        <Image
          style={{
            ...Platform.select({
              ios: {
                ...styles.Image,
              },
              android: {...styles.Image},
            }),
          }}
          source={require('../Src/Images/Vector1.png')}
        />
        <TouchableOpacity>
          <Image
            style={{
              ...Platform.select({
                ios: {
                  ...styles.Pencil,
                },
                android: {
                  ...styles.Pencil,
                },
              }),
            }}
            source={require('../Src/Images/pencil.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cover}>
        <View style={styles.MainProfile}>
          {profileData1.map((profile, index) => (
            <View key={index.toString()} style={styles.Profiles}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.ProficPic} source={profile.Source} />
              </TouchableOpacity>
              <Text style={styles.title1}>{profile.Title}</Text>
            </View>
          ))}
        </View>
        <View style={styles.MainProfile}>
          {profileData2.map((profile, index) => (
            <View key={index.toString()} style={styles.Profiles}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.ProficPic} source={profile.Source} />
              </TouchableOpacity>
              <Text style={styles.title1}>{profile.Title}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.Add}>
          <Image
            style={styles.Add}
            source={require('../Src/Images/Group1.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  NetflixView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Image: {
    width: scaleSize(150),
    height: scaleSize(100),
    resizeMode: 'contain',
  },
  Pencil: {
    width: scaleSize(45),
    height: scaleSize(24),
    resizeMode: 'contain',
    position: 'absolute',
    top: scaleSize(38),
    left: scaleSize(52),
  },
  cover: {
    marginTop: scaleSize(150),
  },
  Profiles: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: scaleSize(10),
  },
  ProficPic: {
    width: scaleSize(125),
    height: scaleSize(100),
    resizeMode: 'contain',
  },
  title1: {
    color: 'white',
    marginTop: scaleSize(22),
  },

  MainProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddTouch: {
    width: scaleSize(1),
    height: scaleSize(1),
  },
  Add: {
    resizeMode: 'contain',
    height: scaleSize(55),
    width: scaleSize(55),
    top: scaleSize(35),
    marginLeft: scaleSize(53),
  },
});
