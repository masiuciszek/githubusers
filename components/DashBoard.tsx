/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { getRepos } from '../utils/api';
import { RootStackParamList } from '../utils/types';

type DashBoardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DashBoard'
>;
type DashBoardScreenRouteProp = RouteProp<RootStackParamList, 'DashBoard'>;

interface BaseStyles {
  backgroundColor: string;
  alignSelf: string;
  width: string;
  flex: number;
  justifyContent: string;
  alignItems: string;
}

interface Props {
  navigation: DashBoardScreenNavigationProp;
  route: DashBoardScreenRouteProp;
}

const DashBoard: React.FC<Props> = ({ navigation, route }) => {
  const { user } = route.params;

  function makebackgroundColor(n: number): BaseStyles {
    const baseStyles: BaseStyles = {
      backgroundColor: '',
      alignSelf: 'stretch',
      justifyContent: 'center',
      width: '100%',
      flex: 1,
      alignItems: 'center',
    };
    switch (n) {
      case 1:
        baseStyles.backgroundColor = '#26A69A';
        break;
      case 2:
        baseStyles.backgroundColor = '#0EEAFF';
        break;
      case 3:
        baseStyles.backgroundColor = '#AB47BC';
        break;
      default:
        baseStyles.backgroundColor = '#0D47A1';
    }
    return baseStyles;
  }

  const goToPage = (pageName: string): void => {
    if (pageName === 'Profile') {
      navigation.navigate('Profile', {
        userData: user,
      });
    }
    if (pageName === 'Repos') {
      getRepos(user.login).then(res => {
        navigation.navigate('Repos', {
          // data: { userData: user, repos: res },
          userData: user,
          repos: res,
        });
      });
    }
    if (pageName === 'Notes') {
      navigation.navigate('Notes');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.img} />
      <TouchableHighlight
        style={makebackgroundColor(1)}
        onPress={() => goToPage('Profile')}
      >
        <Text style={styles.btnText}>View Profile</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={makebackgroundColor(2)}
        onPress={() => goToPage('Repos')}
      >
        <Text style={styles.btnText}>View Repos</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={makebackgroundColor(3)}
        onPress={() => goToPage('Notes')}
      >
        <Text style={styles.btnText}>View Notes</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(28, 29, 33,0.2)',
    padding: 5,

    textAlign: 'center',
    position: 'absolute',
    left: '40%',
    top: '10%',
  },
  img: {
    height: 350,
    position: 'relative',
  },
  btnText: {
    color: '#fff',
    fontSize: 25,
  },
});
export default DashBoard;
