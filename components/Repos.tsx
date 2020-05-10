/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Badge from './Badge';
import Seperator from '../helpers/Seperator';
import { UserProfile, RootStackParamList } from '../utils/types';

type ReposScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Repos'
>;
type ReposBoardScreenRouteProp = RouteProp<RootStackParamList, 'Repos'>;

interface Props {
  route: ReposBoardScreenRouteProp;
  navigation: ReposScreenNavigationProp;
}

const Repos: React.FC<Props> = ({ route, navigation }) => {
  const repositories = route.params?.repos.slice(0, 5);
  // const repositories: Array<any> = route.params.data.repos.slice(0, 5);
  // const user: UserProfile = route.params.data.userData;
  const user = route.params?.userData;

  const sendToWeb = (url: string): void => {
    navigation.navigate('RepoViewWeb', {
      url,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Badge userInfo={user} />
      {repositories?.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => sendToWeb(item.html_url)}
          >
            <Text style={styles.title}>Name:</Text>
            <Text style={styles.content}>{item.full_name}</Text>
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.title}>Created:</Text>
            <Text style={styles.content}>{item.created_at}</Text>
          </View>
          <Seperator />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    padding: 5,
    margin: 5,
  },

  title: {
    color: '#3498DB',
    fontWeight: '700',
    fontSize: 16,
    padding: 3,
  },

  content: {
    fontSize: 16,
    padding: 3,
  },
});
export default Repos;
