import { View, Text, Touchable, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { UnknownImagesUri } from '../constants/images'
import { colors, fontSize } from '../constants/tokens'
import { defaultStyles } from '../styles'
import { useTheme } from 'react-native-paper'


export type TrackListItemProps = {
  track: {title: string, image?: string, artist:string}
}

const TrackListItem = ({track}: TrackListItemProps) => {
  const isActiveTrack = false

const theme = useTheme()

  return (
    <TouchableHighlight>
      <View style= {styles.trackItemContainer}>
        <View>
          <FastImage source={{
            uri: track.image ?? UnknownImagesUri,
            priority: FastImage.priority.normal
          }}
          style={{
            ...styles.trackArtworkImage,
            opacity: isActiveTrack? 0.6: 1,

          }}/>
            
        </View>
        <View style={{width: '100%'}}>
          <Text numberOfLines={1} style={{ color: isActiveTrack ? theme.colors.primary : theme.colors.onSurface}}>
            {track.title}
          </Text>
          {track.artist && (
            <Text numberOfLines={1} style={{color: theme.colors.onSurface}}>{track.artist}</Text>
          )
          
          }
        </View>
      </View>
        
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
    // margin: 10
	},
  trackArtworkImage : {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  tracktitle: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: '600',
    maxWidth: '90%'
  },
  trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})

export default TrackListItem