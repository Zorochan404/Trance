import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../../styles'
import { useNavigationSearch } from '../../../hooks/useNavigationSearch';
import { colors } from '../../../constants/tokens';

const FavouritesScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Search...',
      tintColor: colors.primary, // Assuming primary is a contrasting color
       // White background to stand out against black
      textColor: '#FFFFFF', // Black text color
       // Grey placeholder color for contrast
    },
  });

  return (
    <View style = {{...defaultStyles.container, paddingTop: 100}}> 
      <Text style={{...defaultStyles.text}}>Favourites screen</Text>
    </View>
  )
}

export default FavouritesScreen
