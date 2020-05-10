/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getUser } from '../utils/api';
import { RootStackParamList } from '../utils/types';

const { useState } = React;

type MainAppScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainApp'
>;

interface Props {
  navigation: MainAppScreenNavigationProp;
}

const MainApp: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    getUser(username).then(res => {
      if (res.message === 'Not Found') {
        setError('User not found');
        setIsLoading(false);
      } else {
        navigation.navigate('DashBoard', {
          user: res,
        });
        setError('');
        setIsLoading(false);
        setUsername('');
      }
    });
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a Github User </Text>
        <TextInput
          style={styles.searchInput}
          value={username}
          onChangeText={(text: string) => setUsername(text)}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#fefefe"
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        {error.length > 0 && <Text style={styles.errorMsg}>{error}</Text>}
        <ActivityIndicator animating={isLoading} color="#111" size="large" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#376cff',
    justifyContent: 'center',
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  searchInput: {
    height: 50,
    padding: 4,
    backgroundColor: '#fefefe',
    marginRight: 5,
    fontSize: 23,
    borderWidth: 2,
    borderRadius: 8,
    color: '#333',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  errorMsg: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
    color: '#fff',
  },
});
export default MainApp;
