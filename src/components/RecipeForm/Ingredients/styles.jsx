import { StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    definitionContainer:{
        backgroundColor: "white"
    },
    definitionPhase: {
        fontSize: 25,
        fontWeight: "800",
        textAlign: "center",
        paddingTop: 30,
        paddingBottom: 5,
        color: "#003566"
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
        paddingHorizontal: 5
    },
    activePhase: {
        color: "white",
        fontSize: 15,
        fontWeight: "600",
        backgroundColor: "#003566",
        paddingVertical: 2,
        paddingHorizontal: 5
    },
    inputContainer: {
        backgroundColor: "#000814",
        paddingHorizontal: 35,
        marginTop: 20
    },
    ingredientsOuterContainer: {
        height: 300
    },
    ingredientsContainer:{
        flexDirection: "row"
    },
    ingredient:{
        backgroundColor: "white",
        borderRadius: 15,
        width: 200,
        marginBottom: 12
    },
    ingredientquantity:{
        backgroundColor: "white",
        borderRadius: 15,
        width: 120,
        marginLeft: 20,
        marginBottom: 10
    },
    inputdefinition: {
        backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 18,
    },
    button: {
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom: 30,
        backgroundColor: "#003566",
        borderRadius: 15
    },
    buttonText: {
        color: "white",
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center"
    }
})