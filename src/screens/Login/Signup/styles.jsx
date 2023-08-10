import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const containerWidth = width * 0.4;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#f2f2f2',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    width: 64,
    height: 64,
    bottom: -64,
    left: width * 0.5 - 64,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000814',
  },
  subtitle: {
    color: '#000814',
  },
  button: {
    width: width * 0.5,
    borderWidth: 1,
    borderColor: '#000814',
    borderStyle: 'solid',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  top: {
    alignItems: 'center',
    gap: 8,
  },
  input: {
    width: width * 0.7,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#000814',
    borderRadius: 20,
    borderStyle: 'solid',
  },
  formContainer: {
    gap: 8,
  },
  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: width * 0.7,
    display: 'flex',
    flexDirection: 'row',
    gap: 8.
  },
  icon: {
    width: 100,
    height: 100,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    marginTop: 5,
    fontSize: 12
  },
  link: {
    color: "#003566",
    fontWeight: 'bold',
  }

});
