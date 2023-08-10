import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    favoriteContainer: {
        backgroundColor: "white"
    },
    title: {
      color: "#FFC300",
      fontSize: 35,
      fontWeight: "bold",
      paddingVertical: 25,
      paddingHorizontal: 30,
      backgroundColor: "#003566",
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25
    },
    outerContainer: {
      height: 660, 
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
      paddingTop: 0,
      paddingRight: 10
  },
    column: {
      width: '48%',
      marginBottom: 10,
  },
})
