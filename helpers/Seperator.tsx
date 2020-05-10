import * as React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {}

const Seperator: React.FC<Props> = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#343434',
    flex: 1,
    // marginLeft: 15,
    marginRight: 15,
    padding: 3,
    marginTop: 5,
  },
});
export default Seperator;
