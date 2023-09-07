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
    }
});