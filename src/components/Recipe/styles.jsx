import {StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const containerWidth = width * 0.4; 
export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: 'left', 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    height: 225,
    width: containerWidth, 
    backgroundColor: "#000814",
    marginHorizontal: 10, 
    marginBottom: 10, 
  },
  image: {
    width: '94%', 
    height: 140,
    borderRadius: 15,
    marginTop: 6,
    marginHorizontal: 5
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center', 
    paddingVertical: 5, 
    marginLeft: 8
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  Row: {
    flexDirection: "row",
    justifyContent: 'space-between', 
  },
  icon: {
    marginRight: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FFC300",
  },
  text: {
    fontSize: 15,
    color: "white",
    marginRight: 14,
  },
});