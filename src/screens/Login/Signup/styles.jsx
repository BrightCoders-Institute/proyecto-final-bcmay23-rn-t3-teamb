import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const containerWidth = width * 0.4;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000814',
  },
  subtitle: {
    color: '#000814',
  },
  formContainer: {
    gap: 5,
  },
  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: width * 0.7,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottom: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  link: {
    color: "#003566",
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
  },

});
