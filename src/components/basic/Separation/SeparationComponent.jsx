import React from 'react';
import {Text, View} from 'react-native';
import { styles } from './styles';

export const SeparationComponent = ({data}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      <View>
        <Text style={styles.text}>{data}</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
    </View>
  );
};
