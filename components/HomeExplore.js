import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Topics from './Topics';
import { useFonts } from 'expo-font/build/FontHooks';

const HomeExplore = () => {
    const [fontsLoaded] = useFonts({
      'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });

  const [selectedTopic, setSelectedTopic] = useState('All')

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic)
  }

  return (
    <View style={styles.exploreContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
       <View style={styles.exploreItemsContainer}>
        <View style={styles.compassIconContainer}>
            <Ionicons name='compass-outline' size={20}/>
            <Text style={styles.exploreText}>Explore</Text>
        </View>
        <View style={styles.verticalDivider}></View>
            <Topics selected={selectedTopic === 'All'? true : false} topicText={'All'} handleSelectTopic={handleSelectTopic}/>
            <Topics selected={selectedTopic === 'Gaming'?true : false} topicText={'Gaming'} handleSelectTopic={handleSelectTopic}/>
            <Topics selected={selectedTopic === 'Programming Languages'?true : false} topicText={'Programming Languages'} handleSelectTopic={handleSelectTopic}/>
            <Topics selected={selectedTopic === 'Mir4'?true : false} topicText={'Mir4'} handleSelectTopic={handleSelectTopic}/>
            <Topics selected={selectedTopic === 'Games'?true : false} topicText={'Games'} handleSelectTopic={handleSelectTopic}/>
            <Topics selected={selectedTopic === 'Job Interviews'?true : false} topicText={'Job Interviews'} handleSelectTopic={handleSelectTopic}/>
       </View>
      </ScrollView>
    </View>
  )
}

export default HomeExplore;

const styles = StyleSheet.create({
    exploreContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    exploreItemsContainer: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 4
    },
    compassIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        paddingVertical: 2,
        paddingHorizontal: 5,
        backgroundColor: '#f2f0ed',
        marginTop: 10,
        marginBottom: 4
    },
    exploreText: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15
    },
    verticalDivider: {
        width: 1,
        height: 20,
        backgroundColor: '#f2f0ed',
        marginLeft: 10,
        marginTop: 12,
        marginRight: 10
    }
})