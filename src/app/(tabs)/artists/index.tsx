import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../../styles'
import { useNavigationSearch } from '../../../hooks/useNavigationSearch';
import { Card, Searchbar } from 'react-native-paper';


const ArtistScreen = () => {
  

  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Search...',
    },
  });

  const [searchQuery, setSearchQuery] = React.useState('');



  return (
    <View style = {{...defaultStyles.container, paddingTop: 100}}> 
        <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />

      <Text style={defaultStyles.text}>Search term: {search}</Text>
    </View>
  )
}

export default ArtistScreen