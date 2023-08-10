import { View, ScrollView, Text } from 'react-native';
import { useState } from 'react';
import recipe from '../../assets/recipes.json';
import ShowRecipe from '../../components/Recipe/ShowRecipe';
import {styles} from "./styles"

export const FavoriteScreen = () => {
    const [data, setData] = useState(recipe);
    return (
        <View style={styles.favoriteContainer}>
            <Text style={styles.title}>Favorites!</Text>
            <View style={styles.outerContainer}>
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.row}>
                {data.map((item, index) => (
                    <View key={item.id} style={styles.column}>
                    <ShowRecipe recipeData={item} />
                    </View>
                ))}
                </View>
            </View>
            </ScrollView>
            </View>
        </View>
    );
}
