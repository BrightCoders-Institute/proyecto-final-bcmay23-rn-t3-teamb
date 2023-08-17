import Definition from "../../components/RecipeForm/Definition/Definition";
import Ingredients from "../../components/RecipeForm/Ingredients/Ingredients";
import Finish from "../../components/RecipeForm/Finish/Finish";
import React from "react";
import { View, Text } from "react-native";
import { RecipeFormNavigator } from "../../navigation/RecipeFormNavigator";

export const RecipeFormScreen = () => {
    return (
        <View>
            <Definition/>
        </View>
    );
}
