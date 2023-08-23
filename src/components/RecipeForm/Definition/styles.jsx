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
        marginTop: 10
    },
    inputdefinition: {
        backgroundColor: "white",
        borderRadius: 15,
        marginVertical: 18,
    },
    tags: {
        color: "white",
        backgroundColor: "#FFC300",
        padding: 3,
        marginRight: 280,
        textAlign: "center",
        borderRadius: 10,
        marginBottom: 25
    },
    imagePicker: {
        color: "black",
        backgroundColor: "white",
        paddingVertical: 15,
        paddingLeft: 5,
        borderRadius: 15,
        marginVertical: 18
    },
    button: {
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom: 20,
        backgroundColor: "#003566",
        borderRadius: 15
    },
    disabledButton: {
        opacity: 0.5,
    },
    buttonText: {
        color: "white",
        fontSize: 30,
        fontWeight: "800",
        textAlign: "center"
    }
})