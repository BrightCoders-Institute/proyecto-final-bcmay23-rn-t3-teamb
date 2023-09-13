import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
const containerWidth = width * 0.4;
export const styles = StyleSheet.create({
    Container: {
        width: width,
        display: 'flex',
        flexDirection: "row",
        flexWrap: 'wrap',
        gap: 15,
        marginTop: 15,
        justifyContent: 'space-evenly'
    },
    searchPlaceHolder: {
        color: "#003566",
        fontSize: 40,
        fontWeight: "800",
        paddingBottom: 20,
        paddingTop: 150,
        fontFamily: ""
    },
    image: {
        height: 250,
        width: 250,
    },
    searchPlaceholder: {
        alignItems: "center",
    }
});