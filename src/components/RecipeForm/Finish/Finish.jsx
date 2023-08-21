import React from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'; // Replace 'FontAwesome' with the icon library you are using
import { updateFormPhase, goToPreviousPhase, goToSpecificPreviousPhase } from '../../../actions/actions';
import { connect, useDispatch } from 'react-redux';
import { styles } from "./styles";

const Finish = (props) => {
    const {recipe, currentPhase, updateFormPhase, goToPreviousPhase } = props;
    const dispatch = useDispatch();

    const handlePreviousPhase = () => {
        dispatch(goToSpecificPreviousPhase('ingredients'));
      };

    const handlePhaseClick = (phaseName) => {
        dispatch({ type: 'UPDATE_FORM_PHASE', payload: phaseName });
    };


    const renderPhaseText = (phaseName) => {
        const isActive = currentPhase === phaseName;
        return (
          <Text
            style={[
              styles.phases,
              isActive && styles.activePhase,
            ]}
          >
            {phaseName}
          </Text>
        );
      };

    const onPress = () => {
        // Handle the continue button press
    };

    return (
        <View style={styles.definitionContainer}>
            <Text style={styles.definitionPhase}>Finish</Text>
            {currentPhase === 'finish' && (
                <TouchableOpacity onPress={handlePreviousPhase}>
                    <Text>back</Text>
                </TouchableOpacity>
            )}
            <View style={styles.phaseIndicator}>
                <TouchableOpacity onPress={() => handlePhaseClick('Definition')}>
                    {renderPhaseText('definition')}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePhaseClick('Ingredients')}>
                    {renderPhaseText('ingredients')}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePhaseClick('Finish')}>
                    {renderPhaseText('finish')}
                </TouchableOpacity>
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

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        recipe: state.form.recipe,
        currentPhase: state.form.phase,
    };
};

const mapDispatchToProps = {
    updateFormPhase,
    goToPreviousPhase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
