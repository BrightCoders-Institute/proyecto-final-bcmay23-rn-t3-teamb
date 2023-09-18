import React from 'react'
import { Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import ShowRecipe from '../../components/Recipe/ShowRecipe'
import recipe from '../../assets/recipes.json';
import {styles} from "./styles"
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { firebase } from "@react-native-firebase/firestore";
import Icon from "react-native-vector-icons/MaterialIcons"

export const ProfileScreen = () => {
  const [userData, setUserData] = useState({});
  const [userRecipes, setUserRecipes] = useState([]);
  const imageProfile = require('../../images/chef-profile.png');
  const [userRecipesCount, setUserRecipesCount] = useState(0);
  const userId = auth().currentUser?.uid;
  const [userLikesCount, setUserLikesCount] = useState(0);

  useEffect(() => {
    const fetchUserData = () => {
      if (userId) {
        const userRef = firebase.firestore().collection('users').doc(userId);
        userRef.onSnapshot((doc) => {
          if (doc.exists) {
            setUserData(doc.data());
          }
        });
      }
    };

    const fetchUserRecipes = () => {
      if (userId) {
        const recipesRef = firebase.firestore().collection('recipes').where('userId', '==', userId);
        const unsubscribe = recipesRef.onSnapshot((querySnapshot) => {
          const recipesData = [];
          querySnapshot.forEach((doc) => {
            recipesData.push(doc.data());
          });
          setUserRecipes(recipesData);
          setUserRecipesCount(recipesData.length);
        });

        return () => unsubscribe();
      }
    };

    fetchUserData();
    fetchUserRecipes();

    const likesRef = firebase.firestore().collection('favorites').where('userId', '==', userId);
    likesRef.get().then((querySnapshot) => {
      setUserLikesCount(querySnapshot.size); 
    });
  }, [userId]);
  
  const fetchUserRecipes = () => {
    const recipesRef = firebase.firestore().collection('recipes').where('userId', '==', userId);
    recipesRef.get().then((querySnapshot) => {
      const recipesData = [];
      querySnapshot.forEach((doc) => {
        recipesData.push(doc.data());
      });
      setUserRecipes(recipesData);
      setUserRecipesCount(recipesData.length);
    });
  };

  const likesRef = firebase.firestore().collection('favorites').where('userId', '==', userId);
  likesRef.get().then((querySnapshot) => {
    setUserLikesCount(querySnapshot.size); 
  });

  async function signOut() {
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
    navigation.navigate('Main');
  }

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity onPress={() => { auth().signOut(); signOut() }} style={styles.logOutContainer}>
        <Icon name="logout" color="yellow" size={25}/>      
      </TouchableOpacity>
        <View style={styles.imageContainer}>
            <Image
                source={imageProfile} 
                style={styles.imageProfile}
            /> 
        </View>     
        <Text style={styles.userName}>{userData.username}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>

        <View style={styles.likesContainer}>
            <View style={styles.likesinnerContainer}>
                <Text style={styles.recipesNumber}>{userRecipesCount}</Text>
                <Text style={styles.recipesText}>Recipes</Text>
            </View>
            <View style={styles.likesinnerContainer}>
                <Text style={styles.recipesNumber}>{userLikesCount}</Text>
                <Text style={styles.recipesText}>Favorites</Text>
            </View>
        </View>
      <View style={styles.outerContainer}>
        <ScrollView> 
          <View style={styles.container}>
            <View style={styles.row}>
              {userRecipes.map((recipeData, index) => (
                <View key={index} style={styles.column}>
                  <ShowRecipe recipeData={recipeData} context="profile" titleKey="name"  fetchUserRecipes={fetchUserRecipes}/>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
