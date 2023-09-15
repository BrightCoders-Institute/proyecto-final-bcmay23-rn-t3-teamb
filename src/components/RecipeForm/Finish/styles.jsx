import { StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');
const containerWidth = width * 0.8; // Adjust the width percentage as needed

export const styles = StyleSheet.create({
    definitionContainer:{
        backgroundColor: "white"
    },
    goBackContainer: {
      backgroundColor: "#003566",
      padding: 5,
      width: 35,
      borderRadius: 50,
      marginLeft: 5,
      marginTop: 2,
    },
    definitionPhase: {
        fontSize: 25,
        fontWeight: "800",
        textAlign: "center",
        paddingBottom: 5,
        color: "#003566",
        marginTop: -8
    },
    phaseIndicator: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#000814",
        paddingVertical: 8
    },
    phases: {
        color: "black",
        fontSize: 15,
        fontWeight: "600",
        backgroundColor: "white",
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 10
    },
    activePhase: {
      color: "white",
      fontSize: 15,
      fontWeight: "600",
      backgroundColor: "#003566",
      paddingVertical: 2,
      paddingHorizontal: 5
  },
    outerContainer: {
        backgroundColor: "#000814",
        alignItems: "center",
        marginTop: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: "#003566",
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
    containerDataFinish:{
        flexDirection: "row",
      },
    ingredientsList: {
        backgroundColor: "#FFC300",
        padding: 8,
        borderRadius: 15,
        marginLeft: 40,
        marginRight: 20,
        height: 400,
        marginBottom: 22,
      },
      ingredientsTitle:{
        textAlign: "center",
        color: "black",
        fontWeight: "500"
      },
      ingredientsContainer: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingBottom: 220

      },
      ingredientsText: {
        borderRadius: 15,
        paddingHorizontal: 5,
        textAlign: "left",
        color: "black",
        fontWeight: "500"
      },
      description: {
        backgroundColor: "#FFC300",
        padding: 8,
        borderRadius: 15,
        marginRight: 40,
        width: 170,
        height: 190
      },
      ingredientsDescription: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 5,
        textAlign: "left",
        color: "black",
        fontWeight: "500",
        paddingBottom: 135
      },
      instructions:{
        backgroundColor: "#FFC300",
        padding: 8,
        borderRadius: 15,
        marginRight: 40,
        marginTop: 20,
        marginBottom: 22,
        width: 170,
        height: 190

      },
      ingredientsInstructions: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 5,
        textAlign: "left",
        color: "black",
        fontWeight: "500",
        paddingBottom: 135
      },
      buttonContainer: {
        backgroundColor: "#000814",
      },
    button: {
        paddingVertical: 10,
        paddingHorizontal:100,
        marginHorizontal: 40,
        marginBottom: 20,
        backgroundColor: "#003566",
        borderRadius: 15
    },
    buttonText: {
        color: "white",
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center"
    },

    modalContent: {
        backgroundColor: "white",
        height: 200,
        marginVertical: 300,
        marginHorizontal: 80,
        borderRadius: 15,
        borderWidth: 10,
        borderColor: "#003566",
    },
    modalIcon: {
      paddingLeft: 65
    },
    modalText: {
      color: "black",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center"
    }
})