import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const containerWidth = width * 0.4;

export const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    width: 50, 
    textAlign: 'center'
  },
});
