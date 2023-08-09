import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  input: {
    width: width * 0.7,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 3,
    borderRadius: 20,
    borderStyle: 'solid',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003566'
  }
});
