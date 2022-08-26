import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import moment from 'moment';
import { useFonts } from 'expo-font';

const HomeItem =  ({thumbnailImage, profileImage, title, uploader, views, date}) => {

  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
    'Roboto-Thin': require('../assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
  });
  

  return (
    <View style={styles.homeItemContainer}>
      <Image 
        source={{
            uri: thumbnailImage
        }}
        style={styles.thumbnail}
      />
      <View style={styles.videoDetailsContainer}>
        <Image source={{
              uri: profileImage
            }}
            style={styles.profileImage}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.videoTitleText}>{title}</Text>
          <Text style={styles.subInfoText}>{uploader} · {views} · {moment(new Date(date)).fromNow()}</Text>
        </View>
        <View>
          <Entypo name='dots-three-vertical' size={10} style={styles.threeDots}/>
        </View>
      </View>
    </View>
  )
}

export default HomeItem;

const styles = StyleSheet.create({
    homeItemContainer: {
      marginBottom: 15
    },
    thumbnail: {
        flex: 1,
        height: 200,
        width: '100%',
    },
    videoDetailsContainer: {
      marginTop: 10,
      paddingLeft: 10,
      display: 'flex',
      flexDirection: 'row',
      paddingRight: 10
    },
    profileImage: {
      height: 30,
      width: 30,
      borderRadius: 50,
      marginRight: 10,
      marginTop: 4
    },
    descriptionContainer: {
      flex: 1,
    },
    videoTitleText: {
      fontFamily: 'Roboto-Bold',
      fontSize: 15
    },
    subInfoText: {
      fontFamily: 'Roboto-Light',
      color: 'gray',
      fontSize: 12
    },
    threeDots: {
      marginTop: 4
    }
})