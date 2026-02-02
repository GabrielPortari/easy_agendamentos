import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Calendar from '../screens/calendar/calendar';
import Home from '../screens/home/home';
import Reports from '../screens/reports/reports';

type RootTabParamList = {
  Home: undefined;
  Calendar: undefined;
  Reports: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function Navigation(){
    return (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#2558ff',
                    tabBarInactiveTintColor: '#888',
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === 'Home') {
                            return <MaterialIcons name="home" size={size} color={color} />;
                        } else if (route.name === 'Calendar') {
                            return <MaterialIcons name="calendar-today" size={size} color={color} />;
                        } else if (route.name === 'Reports') {
                            return <MaterialIcons name="assessment" size={size} color={color} />;
                        }
                        return null;
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Calendar" component={Calendar} />
                <Tab.Screen name="Reports" component={Reports} />
            </Tab.Navigator>
    );
}