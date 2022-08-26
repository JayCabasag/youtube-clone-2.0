import { View, Text, SafeAreaView, StyleSheet, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import HomeItem from '../components/HomeItem';
import HomeExplore from '../components/HomeExplore';

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  const [pressed, setPressed] = useState('')
  const [totalNotifications, setTotalNotifications] = useState(2)

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <StatusBar animated={true} backgroundColor={'#fff'} barStyle={'dark-content'}/>
      {/* Header */}
      
      {/* Body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainSrollContainer}
      >
        <View style={styles.headerContainer}>
        <Image 
          source={require('../assets/youtube-preview.png')}
          style={styles.youtubeImage}
        />
       
          <View style={styles.leftHeaderContent}>
            <Feather name='cast' size={24} style={pressed === 'cast'?styles.pressedHeaderIcon : styles.headerIcon} onPress={() => setPressed('cast')} onPressOut={() =>setPressed('')}/>
            <TouchableOpacity style={{position: 'relative'}}>
              {
                totalNotifications === 0?
                null
                :
                <View style={styles.totalNotificationContainer}>
                  <Text style={styles.notificationText}>{totalNotifications}</Text>
                </View>
              }
              <Ionicons name='notifications-outline' size={24} style={pressed === 'notification'?styles.pressedHeaderIcon : styles.headerIcon} onPress={() => setPressed('notification')} onPressOut={() =>setPressed('')}/>
            </TouchableOpacity>
            <Ionicons name='search-outline' size={24} style={pressed === 'search'?styles.pressedHeaderIcon : styles.headerIcon} onPress={() => setPressed('search')} onPressOut={() => setPressed('')}/>
            <TouchableOpacity 
              style={pressed === 'profile'?styles.pressedProfileImageContainer : styles.profileImageContainer} onPress={() => setPressed('profile')} onPressOut={() => setPressed('')}
            >
              <Image source={{
                uri: 'https://img.freepik.com/premium-photo/beautiful-young-asian-woman-with-clean-fresh-skin-face-care-facial-treatment-cosmetology-beauty-asian-woman-portrait_65293-4687.jpg?w=2000'
              }}
                style={styles.pressedProfileImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        <HomeExplore />
        
        <HomeItem 
          thumbnailImage='https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png'
          profileImage='https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png'
          title='My Web Application development'
          uploader='IchigoPlays' 
          views='43M'
          date='10/16/2021'
        />

        <HomeItem 
          thumbnailImage='https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png'
          profileImage='https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png'
          title='React native App'
          uploader='IchigoPlays' 
          views='43M'
          date='10/16/2021'
        />

        <HomeItem 
          thumbnailImage='https://assets-static.invideo.io/images/large/Youtube_Thumbnail_Size_2021_53058c578b.png'
          profileImage='https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png'
          title='Play Games with PC'
          uploader='IchigoPlays' 
          views='43M'
          date='10/16/2021'
        />

      <HomeItem 
          thumbnailImage='https://lh6.googleusercontent.com/XELZNT-sJZ1pVZNxF7DOwq6lMA6kNor4V5JhMXSJaT6vPR85PaTR1c2TCMSRMogYXm0R2a0z43jBUX8YVLcI_UCOTCJplTQDWt_Lfq_zlBqZsOX3VgIRi7kbaYELhgM5mfd4oHEL'
          profileImage='https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png'
          title='Designing web app using react'
          uploader='Pirate King' 
          views='13M'
          date='02/16/2022'
        />

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeScreenContainer: {
    paddingTop: 1,
    backgroundColor: '#fff'
  },
  youtubeImage: {
    width: 100,
    height: 20,
    marginTop: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    marginBottom: 5,
    marginTop: 4
  },
  leftHeaderContent: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 10,
    alignItems: 'center',
    marginTop: 4
  },
  headerIcon: {
    marginRight: 15,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50
  },
  pressedHeaderIcon: {
    marginRight: 15,
    backgroundColor: '#f2f0ed',
    padding: 5,
    borderRadius: 50
  },
  profileImageContainer: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#fff'
  },

  pressedProfileImageContainer: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#f2f0ed'
  },
  profileImage: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  pressedProfileImage: {
    height: 24,
    width: 24,
    borderRadius: 50,
    backgroundColor: '#f2f0ed',
    padding: 5,
  },
  mainSrollContainer: {
    paddingBottom: 10
  },
  totalNotificationContainer: {
    position: 'absolute', 
    backgroundColor: 'red', 
    zIndex: 999, 
    marginLeft: 'auto', 
    marginRight: 0, 
    padding: 2,
    paddingHorizontal: 7,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15
  },
  notificationText: {
    color: '#fff'
  }
})