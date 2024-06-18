import { View, Text, FlatList, FlatListProps, ScrollView } from 'react-native'
import React from 'react'
import library from '../../assets/data/library.json'
import TrackListItem from './TrackListItem'
import { utilsStyles } from '../styles/index'


export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)



const TracksList = ({...flatlistProps}: TracksListProps) => {
  return (
  
      <FlatList data={library} 
      ItemSeparatorComponent={ItemDivider}
      renderItem={({item: track})=> (
    <TrackListItem track={{
      ...track,
      image: track.artwork,
    }} 
    />)}
    {...flatlistProps}
  />
    
  )
}

export default TracksList