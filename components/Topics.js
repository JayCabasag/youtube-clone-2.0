import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Topics = ({selected, topicText, handleSelectTopic}) => {
  return (
    <TouchableOpacity style={selected? styles.activetopicContainer : styles.notActivetopicContainer} onPress={() => handleSelectTopic(topicText)}>
      <Text style={selected? styles.activetopicContainerText : styles.notActiveTopicContainerText}>{topicText}</Text>
    </TouchableOpacity>
  )
}

export default Topics;

const styles = StyleSheet.create({
    activetopicContainer: {
        backgroundColor: 'gray',
        marginRight: 8,
        height: 24,
        paddingVertical: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray'
    },

    activetopicContainerText: {
        color: '#fff',
        fontSize: 15
    },
    notActivetopicContainer: {
        backgroundColor: '#f2f0ed',
        marginRight: 8,
        height: 24,
        paddingVertical: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#e8e6e3'
    },
    notActiveTopicContainerText: {
        color: 'black',
        fontSize: 15
    },
})