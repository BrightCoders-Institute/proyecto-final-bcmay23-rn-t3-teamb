import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    homecontainer: {
      backgroundColor: "white"
    },
    titlecontainer:{
      flexDirection: "row",
      paddingLeft: 20,
      paddingVertical: 5
    },
    title: {
      color: '#FFC300',
      fontSize: 25,
      fontWeight: "bold",
      paddingLeft: 5,
      paddingTop: 15
    },
    image: {
      width: 70,
      height: 70,
    },
    popularrecipecontainer: {
      borderRadius: 15,
      marginHorizontal: 20,
      textAlign: "left",
      alignItems: "left"
    },
    populartext: {
      flexDirection: "row"
    },
    recipedaytext: {
      paddingLeft:22,
      color: "#000814",
      fontSize: 20,
      fontWeight: "600",
      paddingBottom: 5
    },
    outerContainer: {
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 15,
      height: 430, 
      margin: 20,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingTop: 5,
      paddingRight: 10
    },
    column: {
      width: '48%',
      marginBottom: 10,
    },
    buttonscontainer: {
      paddingTop: 20,
      paddingHorizontal: 20
    },
    sortButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 4
    },
    sortButtonSelected: {
      backgroundColor: '#FFC300',
    },
    showAllButton: {
      backgroundColor: '#000814',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 25,
      alignSelf: 'center',
      marginRight: 10,
    },
    showAllButtonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 15  },
  });