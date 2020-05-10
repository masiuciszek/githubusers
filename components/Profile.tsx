/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import Badge from './Badge';
import { RootStackParamList } from '../utils/types';
import Seperator from '../helpers/Seperator';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

interface Props {
  route: ProfileScreenRouteProp;
}

const Profile: React.FC<Props> = ({ route }) => {
  const { userData } = route.params;

  return (
    <>
      <ScrollView style={styles.container}>
        <Badge userInfo={userData} />
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text style={styles.textContent}> {userData.name}</Text>
            <Seperator />
          </View>

          <View style={styles.row}>
            <Text style={styles.textContent}> {userData.bio}</Text>
            <Seperator />
          </View>

          <View style={styles.row}>
            <Text style={styles.textContent}>
              {userData.company || 'no company'}
            </Text>
            <Seperator />
          </View>

          <View style={styles.row}>
            <Text style={styles.textContent}>
              pubic repos: {userData.public_repos}
            </Text>
            <Seperator />
          </View>

          <View style={styles.row}>
            <Text style={styles.textContent}>
              followers: {userData.followers}
            </Text>
            <Seperator />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  row: {
    color: '#333',
    fontSize: 19,
    padding: 10,
    marginTop: 12,
    width: '100%',
    marginLeft: 15,
    shadowColor: '#2220',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  textContent: {
    fontSize: 18,
    // marginLeft: 15,
  },
});
