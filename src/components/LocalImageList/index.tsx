import React from 'react'
import { FlatList, Image, ListRenderItem } from 'react-native'

import { IGalleryImage } from '../../@types/interfaces'
import { Styles } from './styles'

interface IProps {
  images: IGalleryImage[]
}

export const LocalImageList = ({ images }: IProps) => {
  const LocalImageItem: ListRenderItem<IGalleryImage> = ({ item }) => {
    return (
      <Image
        style={Styles.container}
        source={{
          uri: item.image.url
        }} 
      />
    )
  }
  
  return (
    <FlatList
      horizontal={true}
      data={images}
      renderItem={LocalImageItem}
      keyExtractor={(item) => item.image.url}
      showsHorizontalScrollIndicator={false}
    />
  )  
}
