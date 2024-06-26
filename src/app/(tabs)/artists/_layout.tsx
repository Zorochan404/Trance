import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { defaultStyles } from '../../../styles'
import {StackScreenWithSearchBar} from "../../../constants/layout"
import { useTheme } from 'react-native-paper'


const ArtistsScreenLayout = () => {


  return (
    <View style= {defaultStyles.container}>
      <Stack>
        <Stack.Screen name='index' options={{...StackScreenWithSearchBar, headerTitle: 'Artists'}} />
      </Stack>
    </View>
  )
}

export default ArtistsScreenLayout