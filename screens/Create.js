import React, { useState } from 'react';
import { BottomSheet } from 'react-native-btr';
import {Text, View, StyleSheet} from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Create = ({showBottomSheet, handleCloseBottomSheet}) => {

  return (
    <BottomSheet
          visible={showBottomSheet}
          // //setting the visibility state of the bottom shee
          onBackButtonPress={handleCloseBottomSheet}
          // //Toggling the visibility state on the click of the back botton
          onBackdropPress={handleCloseBottomSheet}
          // //Toggling the visibility state on the clicking out side of the sheet
        >
          {/*Bottom Sheet inner View*/}
          <View style={styles.bottomSheetContainer}>
            <View style={styles.topHeaderText}>
              <Text style={styles.createText}>Create</Text>
              <Feather name='x' size={25} color="#000000" onPress={handleCloseBottomSheet}/>
            </View>
            <View style={styles.bottomSheetContainer}>
              <View style={styles.actionItems}>
                  <View style={styles.actionIcons}>
                  <Ionicons name='play-circle' size={20} color={'#000'}/>
                  </View>
                  <Text>Create a Short</Text>
              </View>
              <View style={styles.actionItems}>
                  <View style={styles.actionIcons}>
                  <Octicons name='upload' size={20} color={'#000'}/>
                  </View>
                  <Text>Upload Video</Text>
              </View>
              <View style={styles.actionItems}>
                  <View style={styles.actionIcons}>
                  <MaterialCommunityIcons name='antenna' size={20} color={'#000'}/>
                  </View>
                  <Text>Go live</Text>
              </View>
            </View>
          </View>
        </BottomSheet>
  )
}

export default Create;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15
  },
  topHeaderText: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  createText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  actionItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 15
  },
  actionIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#e6dfdf',
    width: 40,
    height: 40,
    marginRight: 10,
  }
});