import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator();

// Screens

import HomeScreen from './screens/HomeScreen';
import ShortsScreen from './screens/ShortsScreen';
import SubscriptionsScreens from './screens/SubscriptionsScreens';
import LibrariesScreen from './screens/LibrariesScreen';
import Create from './screens/Create';

const App = () => {

  
  const [showBottomSheet, setShowBottomSheet] = useState(false)

  const handleShowBottomSheet = () => {
    setShowBottomSheet(true)
  }

  const handleCloseBottomSheet = () => {
    setShowBottomSheet(false)
  }

  return (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;
                
                if(rn === 'Home'){
                    iconName = focused ? 'home' : 'home-outline';
                    return <Ionicons name={iconName} size={20} color={'#000'} />
                  }
                  if (rn === 'Shorts'){
                    iconName = focused ? 'play-circle' : 'play-circle-outline';
                    return <Ionicons name={iconName} size={20} color={'#000'} />
                  }
                  if (rn === ' '){
                    iconName = focused ? 'pluscircle' : 'pluscircleo';
                    return <View style={{paddingTop: 5, zIndex: 9999}}>
                              <AntDesign name={iconName} size={30} color={'#000'} />
                          </View> 
                  }
                  if (rn === 'Subscriptions'){
                    iconName = focused ? 'video-collection' : 'video-collection';
                    return <MaterialIcons name={iconName} size={20} color={'#000'} />
                  }
                  if (rn === 'Libraries'){
                    iconName = focused ? 'list-circle' : 'list-circle-outline'
                    return <Ionicons name={iconName} size={20} color={'#000'} />
                  }
                },
                tabBarActiveTintColor: '#000',
                headerShown: false,
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: {
                  marginTop: -10,
                  marginBottom: 5
                }
                

              })}
              >
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Shorts' component={ShortsScreen}/>
            <Tab.Screen name=' ' component={Create}
              listeners={{
              tabPress: e => {
                // Prevent default action
                e.preventDefault();
                
                //Any custom code here
                setShowBottomSheet(true)
              },
            }}/>
            <Tab.Screen name='Subscriptions' component={SubscriptionsScreens}/>
            <Tab.Screen name='Libraries' component={LibrariesScreen}/>
          </Tab.Navigator>

           {
              showBottomSheet?
              <Create showBottomSheet={showBottomSheet} handleCloseBottomSheet={handleCloseBottomSheet}/>
              :
              null
            }

        </NavigationContainer>
  )
}

export default App