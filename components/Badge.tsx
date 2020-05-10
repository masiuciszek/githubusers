/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { UserProfile } from '../utils/types';

interface Props {
  userInfo: UserProfile | undefined;
}

const Badge: React.FC<Props> = ({ userInfo }) => (
  <View style={styles.container}>
    <Image source={{ uri: userInfo?.avatar_url }} style={styles.image} />
    <Text style={styles.name}>{userInfo?.name}</Text>
    <Text style={styles.handle}>{userInfo?.login}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498DB',
    paddingBottom: 10,
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 60,
    borderWidth: 3,
    alignSelf: 'center',
    marginTop: 10,
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white',
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white',
  },
});
export default Badge;
