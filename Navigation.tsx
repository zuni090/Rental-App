import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import WishList from './screens/WishList';
import Details from './screens/Details';
import Map from './screens/Map';
import TakePhoto from './screens/TakePhoto';
import WishListProvider from './context/wishlistcontext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#556b2f',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white', // Custom background color for the tab bar
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          tabBarShowLabel: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />,
          tabBarShowLabel: false,
        }}
        name="Wishlist"
        component={WishList}
      />
      <Tab.Screen
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
          tabBarShowLabel: false,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <WishListProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            headerStyle: {
              backgroundColor: '#c4c3d0', // Custom background color for the stack header
            },
            headerTintColor: '#fff', // Custom text color for the stack header
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="TakePhoto"
            component={TakePhoto}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen options={{ headerShown: false }} name="Bottomtabs" component={BottomTabs} />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Details"
            component={Details}
          />
          <Stack.Screen
            options={{
              headerBackTitle: 'Back',
            }}
            name="Map"
            component={Map}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WishListProvider>
  );
}

export default Navigation;
