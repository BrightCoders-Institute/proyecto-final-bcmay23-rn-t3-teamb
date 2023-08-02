import {StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const containerWidth = width * 0.9; // Adjust the width percentage as needed
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: "#000814",
    marginBottom: 10,
    width: containerWidth,
    marginHorizontal: 20,
    height: 136
  },
  image: {
    width: '50%',
    height: 135,
    borderRadius: 15
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  icon: {
    marginRight: 8
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FFC300"
  },
  text: {
    fontSize: 16,
    color: "white",
    marginTop: 5
  },
});