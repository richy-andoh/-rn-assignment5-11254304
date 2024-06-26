import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children}) => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const lightTheme = {
        backgroundColor: 'white',
        textColor: 'black',
        tabBarColor: 'white',
        tabBarIconColor: 'gray',
    };

    const darkTheme = {
        backgroundColor: '#222237',
        textColor: "white",
        tabBarColor: '#222237',
        tabBarIconColor: 'lightgray',
        headerStye: {
            paddingVertical: 10
        }
    };

    const theme = isEnabled ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{isEnabled, toggleSwitch, theme }}>
          {children}
        </ThemeContext.Provider>
    );
};

