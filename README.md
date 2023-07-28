![BrightCoders Logo](img/logo.png)

# RecipeScreen
  
## Table of contents
- [Description of the project](##Description_of_the_project)
- [Functional and Non-functional Requirements](#Functional_and_Non-functional_Requirements)
- [User Interface](#User_Interface)
- [DB Model](#DB_Model)

## Description of the project

RecipeScreen is an exciting mobile application that allows you to unleash your culinary creativity and become a true chef in the comfort  of your kitchen. This app is the perfect tool for all cooking enthusiasts and those who enjoy sharing their delicious creations with      other culinary enthusiasts.
  
## Functional and Non-functional Requirements

### Functional Requirements

Authentication
- User Registration
- The system must allow new users to register by providing their name, email, and password, or by using their Google account.
- User registration data must be stored in Firebase.
- The registration form must include validations to ensure data integrity.
- The registration form design should follow the provided guidelines and specifications.
    
Registered User Login
- Registered users should be able to log in using their email and password, or through their Google account, depending on the registration method they used.
- The system must verify and access the data stored in Firebase to authenticate the login.
- The login form must have validations to ensure correct user authentication.
- The login form design should follow the provided guidelines and specifications.
    
Implement Search and Filtering Functionalities
- Users will be able to search for recipes by category or by name.
- The user will be able to switch screens when selecting a category.
    
Visualization
- Upon entering the home screen, users can view a set of recipes fetched from an API.
- When the user adds recipes, they can view them in a section within their profile as well as on the home screen.
- The user can view all relevant information about a specific recipe when selected.
- Popular Recipes
- There should be a screen that displays favorite recipes.
- The user will have the option to save recipes as favorites for later use.
- The user can obtain a recipe link to share it through integration with social media.
    
App Changes
- Within the application, there will be a profile section where users can view their data, see recipes saved as favorites, change the application's language, and theme.
    
New Recipes
- Users must be able to add new recipes by providing details such as ingredients, preparation time, number of servings, etc. (Include all fields).
- The user will have the option to create a recipe using AI, where they only need to provide the available ingredients and the number of servings needed.
    
### Non-functional Requirements
    
Log-in Speed

Database
- Recipe data will be stored in Firebase or a similar platform.
- Firebase integration must be implemented to store and retrieve recipe information.
    
Quality
- The application code must follow a standardized code style, which will be reviewed and ensured using tools like Eslint or similar.
- An A score should be achieved in static code analysis tools like CodeClimate or similar. This implies maintaining clean, readable, and well-structured code.
    
Design
- The application must be compatible with Android and iOS operating systems to provide a broad user experience.
- Thorough testing should be conducted on both systems to ensure smooth and correct functionality.
    
Source Code
- The application's source code must follow the Object-Oriented Programming (OOP) paradigm.
- SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) should be applied to achieve a modular, maintainable, and extensible design.
- Methods should be small and focused on a single responsibility, following the "one function, one task" principle.
- Code duplication should be avoided, and reusability should be promoted through the creation of modular components and functions.

## User Interface

Design: [here](https://www.figma.com/file/1yIXFqaVE2C01DroGWsRcN/Proyecto-final?type=design&node-id=0-1&mode=design&t=9XCubx1XJrD5Yi4n-0)

## DB Model
  
Db Model: [here](https://dbdiagram.io/d/64c0640d02bd1c4a5eb1915a)
  
## How to Install and Run the Project.
>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
## How to Use the Project.
## Credits
## Badges
