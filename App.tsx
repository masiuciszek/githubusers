/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashBoard from './components/DashBoard';
import MainApp from './components/Main';
import Profile from './components/Profile';
import Repos from './components/Repos';
import RepoViewWeb from './components/RepoViewWeb';
import { UserProfile } from './utils/types';
import Notes from './components/Notes';

interface Props {}

type RootStackParamList = {
  MainApp: undefined;
  DashBoard: { user: UserProfile };
  Profile: { userData: UserProfile };
  Repos: { repos: Array<any>; userData: UserProfile } | undefined;
  RepoViewWeb: { url: string } | undefined;
  Notes: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC<Props> = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="MainApp" component={MainApp} />
      <RootStack.Screen name="DashBoard" component={DashBoard} />
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="Repos" component={Repos} />
      <RootStack.Screen name="RepoViewWeb" component={RepoViewWeb} />
      <RootStack.Screen name="Notes" component={Notes} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
