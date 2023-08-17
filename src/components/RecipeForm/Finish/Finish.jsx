import React from "react"
import { View, Image, Text, StyleSheet, TextInput,TextArea, TouchableOpacity, Dimensions, onPress, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'; // Replace 'FontAwesome' with the icon library you are using

const { width } = Dimensions.get('window');
const containerWidth = width * 0.8; // Adjust the width percentage as needed
const Finish = () => {
    return (
        <View style={styles.definitionContainer}>
                <Text style={styles.definitionPhase}>Finish</Text>
                <View style={styles.phaseIndicator}>
                    <Text style={styles.phases}>Definition</Text>
                    <Text style={styles.phases}>Ingredients</Text>
                    <Text style={styles.phases}>Finish</Text>
                </View>

                <View style={styles.outerContainer}>
                    
                <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailRow}>
                        <Text style={styles.name}>RECIPE NAME</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Icon name="clock" size={20} color="yellow" style={styles.icon} />
                        <Text style={styles.text}>3:30</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Icon name="user-alt" size={20} color="yellow" style={styles.icon} />
                        <Text style={styles.text}>2</Text>
                    </View>
                </View>
                <Image source={"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg?resize=1200:*"} style={styles.image} />
                </View>

                <View style={styles.containerDataFinish}>
                    <ScrollView style={styles.ingredientsList}>
                        <Text style={styles.ingredientsTitle}>Ingredients List</Text>
                        <Text style={styles.ingredientsText}>1.-vanilla 2oz</Text>
                    </ScrollView>
                    <View>
                        <ScrollView style={styles.description}>
                            <Text style={styles.ingredientsTitle}>Description</Text>
                            <Text style={styles.ingredientsDescription}>1.-vanilla</Text>
                        </ScrollView>

                        <ScrollView style={styles.instructions}>
                            <Text style={styles.ingredientsTitle}>Instructions</Text>
                            <Text style={styles.ingredientsInstructions}>1.-vanilla</Text>
                        </ScrollView>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

                </View>
                


        </View>
    )
}

const styles = StyleSheet.create({
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
      ingredientsText: {
        backgroundColor: "white",
        borderRadius: 15,
        paddingBottom: 320,
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
        width: 200
      },
      ingredientsDescription: {
        backgroundColor: "white",
        borderRadius: 15,
        paddingBottom: 120,
        paddingHorizontal: 5,
        textAlign: "left",
        color: "black",
        fontWeight: "500"
      },
      instructions:{
        backgroundColor: "#FFC300",
        padding: 8,
        borderRadius: 15,
        marginRight: 40,
        marginTop: 20,
        marginBottom: 22
      },
      ingredientsInstructions: {
        backgroundColor: "white",
        borderRadius: 15,
        paddingBottom: 120,
        paddingHorizontal: 5,
        textAlign: "left",
        color: "black",
        fontWeight: "500"
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
    }
})

export default Finish;