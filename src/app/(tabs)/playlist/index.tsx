import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../../styles'

const PlaylistScreen = () => {
  return (
    <View style = {{...defaultStyles.container, paddingTop: 100}}> 
      <Text style={defaultStyles.text}>playlist screen</Text>
    </View>
  )
}

export default PlaylistScreen