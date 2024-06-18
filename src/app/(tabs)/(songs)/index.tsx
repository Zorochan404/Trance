import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../../styles'
import TracksList from '../../../components/TracksList'
import { colors, screenPadding } from '../../../constants/tokens'
import { useNavigationSearch } from '../../../hooks/useNavigationSearch'
import { Button, IconButton, useTheme } from 'react-native-paper'
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useRouter } from 'expo-router'


const SongsScreen = () => {
  const theme = useTheme()
  const router = useRouter()

  return (
    <View style = {{...defaultStyles.container, paddingTop: 60, backgroundColor: theme.colors.surface}}> 
    <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', paddingLeft: 8, paddingButton: 50}}>
      <IconButton icon="account-circle-outline" iconColor={theme.colors.primary} size={30} onPress={() => console.log('Pressed')}/>
      <Button mode="contained" onPress={() => console.log('Pressed')} style={{marginRight: 10}}>
        All
      </Button>
      <Button mode="contained" onPress={() => router.push('/signinscreen')} style={{marginRight: 10}}>
        Workout
      </Button>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Sad
      </Button>
    </View>
      <ScrollView contentInsetAdjustmentBehavior='automatic'
      style={{paddingHorizontal: screenPadding.horizontal}}>
        <TracksList scrollEnabled={false}/>
      </ScrollView>
    </View>
  )
}

export default SongsScreen