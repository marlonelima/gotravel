import React from 'react'
import { FlatList, Image, ListRenderItem } from 'react-native'

import { ILocal } from '../../@types/interfaces'
import { Styles } from './styles'

type ILocalImage = Pick<ILocal, 'image'> & {
  id: string
}

interface IProps {
  images: ILocalImage[]
}

export const LocalImageList = ({ images }: IProps) => {
  const LocalImageItem: ListRenderItem<ILocalImage> = ({ item }) => {
    return (
      <Image
        style={Styles.container}
        source={{
          uri: item.image
        }} 
      />
    )
  }
  
  return (
    <FlatList
      horizontal={true}
      data={images}
      renderItem={LocalImageItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  )  
}
