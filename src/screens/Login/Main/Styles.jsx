import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const containerWidth = width * 0.4;

export const styles = StyleSheet.compose({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  top: {
    width: width,
    backgroundColor: '#003566',
    height: height * 0.35,
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 124,
    borderBottomRightRadius: 124,
  },
  icon: {
    position: 'absolute',
    width: 128,
    height: 128,
    bottom: -64,
    left: width * 0.5 - 64,
  },
  containerText: {
    width: width,
    height: height - height * 0.45,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 20,
  },
  containerButtons: {
    gap: 15,
    width: width * 0.7,
    alignItems: 'center',
  },
  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: width * 0.7,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000814'
  },
  subtitle: {
    fontSize: 20,
    color: '#001d3d'
  },
});
