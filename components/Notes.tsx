/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';

import Note from './Note';

interface Props {}

const Notes: React.FC<Props> = () => {
  const [state, setstate] = React.useState([
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SectionList
          style={styles.sectionList}
          sections={state}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Note note={item} />}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  sectionList: {
    padding: 5,
    alignContent: 'center',
    borderWidth: 3,
    marginTop: 95,
    marginBottom: 50,
    width: '90%',
  },
});
export default Notes;
