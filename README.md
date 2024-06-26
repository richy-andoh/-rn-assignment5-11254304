# DCIT202 Mobile Application Development Assignment 5

## Project Overview

This project is a React Native application designed to recreate a UI mockup as specified in the assignment. The application includes multiple screens accessible through bottom tabs, and it allows users to switch between light and dark themes. The design and functionality aim to closely match the provided UI design.

## Features

- **Bottom Tab Navigation**: Includes Home, My Cards, Statistics, and Settings screens.
- **Theme Switching**: Users can switch between light and dark themes.
- **Custom Components**: Utilizes custom components throughout the application.
- **Settings Screen**: Allows users to manage their profile, contact support, change the theme, and more.

## Screens

### Home Screen
- Displays a welcome message.
- Lists recent activities and statistics.

### My Cards Screen
- Displays a list of user's cards.
- Each card includes details like card number, expiry date, and CVV.

### Statistics Screen
- Displays various financial statistics and charts.

### Settings Screen
- Allows users to manage their profile.
- Provides options for language selection, password change, etc.
- Includes a switch for toggling between light and dark themes.

## Components

### HomeScreen

The HomeScreen component displays a welcome message and recent activities.

### MyCards

The MyCards component displays the user's cards with relevant details.

### Statistics

The Statistics component provides an overview of the user's financial statistics.

### SettingsScreen

The SettingsScreen component provides various user settings, including theme switching.

### ThemeProvider

The ThemeProvider component manages the application's theme state and provides the current theme context to all child components.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/richy-andoh/rn-assignment5-ID.git
   cd rn-assignment5-ID

   ```

2. Install dependencies and Start the application:

```
npm install

npm start

```


## Usage

1. Navigate through the app using the bottom tabs.

2. Use the Settings screen to switch between light and dark themes.



## Screenshots

### HomeScreen Light Mode

![Home Screen](/assets/screen11.png)

### HomeScreen Dark Mode

![](/assets//screen14.png)

### Settings Screen Light mode

![](/assets//screen12.png)

### Settings Screen Dark Mode

![](/assets/screen13.png)


### Contributing

1. Fork the repository.

2. Create a new branch:

```
git checkout -b feature-name

```

3. Commit your changes:

```
git commit -m 'Add some feature'

```

4. Push to the branch:

```
git push origin feature-name

```

5. Create a pull request
