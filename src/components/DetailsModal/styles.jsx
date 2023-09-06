import { StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    topIconContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    topContainer: {
      alignItems: "center",
      paddingVertical: 10
    },
    image: {
      height: 250,
      width: 350,
      borderRadius: 15,
    },
    topTextContainer: {
      textAlign: "left",
      paddingHorizontal: 15
    },
    name: {
      color: "black",
      fontSize: 25,
      fontWeight: "bold"
    },
    descriptionContainer: {
      height: 64
    },
    description: {
      color: "black",
      fontSize: 15,
      fontWeight: "600",
      paddingVertical: 8
    },
    iconCenterContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 14,
      paddingHorizontal: 18
    },
    iconCenter: {
      flexDirection: "row"
    },
    iconText: {
      fontSize: 23,
      color: "#000814",
      fontWeight: "bold",
      paddingLeft:2
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: "#000814",
      marginHorizontal: -20,
      marginVertical: -8
    },
    bottomTextContainer: {
      backgroundColor: "white",
      height: 300,
      margin: 20,
      borderRadius: 10
    },
    instructionsContainer: {
      borderWidth: 0
    },
    instructions: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      color: "black",
      fontSize: 15,
      fontWeight: "600",
      paddingVertical: 8,
    },
    ingredientsContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      borderWidth: 1,

    },
    ingredients:{
      color: "black",
      fontSize: 15,
      fontWeight: "600",
      paddingVertical: 8,

    },
    dataTypeButtons: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingHorizontal: 50,
      paddingBottom: 15
    },
    dataTypeButton: {
      backgroundColor: "white",
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#FFC300",
      paddingVertical: 10,
      paddingHorizontal: 15
    },
    selectedDataTypeButton: {
      backgroundColor: "#FFC300"
    },
    bottomButtonsText: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold"
    }
  });