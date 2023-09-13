import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: "white"
    },
    logOutContainer: {
        backgroundColor: "#000814",
        marginRight: 362,
        marginLeft: 5,
        marginTop: 5,
        padding: 10,
        borderRadius: 50
    },
    imageContainer: {
        alignItems: "center",
        paddingVertical: 15,
    },
    imageProfile: {
        width:Dimensions.get('window').width * 0.4,
        height:Dimensions.get('window').height * 0.2,
        borderWidth: 4,
        borderColor: "#003566",
        borderRadius: 100,
    },
    userName: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800",
        color: "#003566"
    },
    userEmail: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
        color: "black",
        paddingVertical: 10
    },
    likesContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    likesinnerContainer: {
        alignItems: "center"
    },
    recipesNumber: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#003566"
    },
    recipesText: {
        fontSize: 15,
        fontWeight: "500",
        color: "black"
    },
    outerContainer: {
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
})