// import { FloatingPlayer } from '@/components/FloatingPlayer'
import { colors, fontSize } from '../../constants/tokens'
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
// import { Tabs } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import SongsScreen from './(songs)';
import ArtistScreen from './artists';
import FavouritesScreen from './favourites';

const Tab = createMaterialBottomTabNavigator();

const TabsNavigation = () => {
	return (
		<Tab.Navigator>
		<Tab.Screen
        name="Feed"
        component={SongsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={ArtistScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
		</Tab.Navigator>
	  );
	}
	

export default TabsNavigation