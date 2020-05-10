/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../utils/types';

type RepoWebScreenRouteProp = RouteProp<RootStackParamList, 'RepoViewWeb'>;

interface Props {
  route: RepoWebScreenRouteProp;
}

const RepoViewWeb: React.FC<Props> = ({ route }) => {
  const repoUrl = route?.params?.url;

  return (
    <View style={styles.container}>
      <WebView source={{ uri: repoUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
});
export default RepoViewWeb;
