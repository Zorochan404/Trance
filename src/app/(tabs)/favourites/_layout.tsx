import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { defaultStyles } from '../../../styles'
import {StackScreenWithSearchBar} from "../../../constants/layout"


const FavouritesScreenLayout = () => {
  return (
    <View style= {{...defaultStyles.container}}>
      <Stack>
        <Stack.Screen name='index' options={{...StackScreenWithSearchBar ,headerTitle: 'Favourites'}} />
      </Stack>
    </View>
  )
}

export default FavouritesScreenLayout
