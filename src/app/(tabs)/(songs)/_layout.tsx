import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { defaultStyles } from '../../../styles'
import {StackScreenWithSearchBar} from "../../../constants/layout"

const SongsScreenLayout = () => {
  return (
    <View style= {defaultStyles.container}>
      <Stack>
        <Stack.Screen name='index' options={{...StackScreenWithSearchBar,  headerTitle: 'Songs'}} />
      </Stack>
    </View>
  )
}

export default SongsScreenLayout