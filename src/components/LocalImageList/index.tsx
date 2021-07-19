import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { ILocal } from '../../@types/interfaces'
import { LocalImage } from './styles'

type ILocalImage = Pick<ILocal, 'image'>

interface IProps {
  images: ILocalImage[]
}

export const LocalImageList = ({ images }: IProps) => {
  const LocalImageItem: ListRenderItem<ILocalImage> = ({ item }) => {
    return (
      <LocalImage
        source={require("../../assets/example/cachoeira-do-abade.jpg")} 
      />
    )
  }
  
  return (
    <FlatList
      horizontal={true}
      data={images}
      renderItem={LocalImageItem}
      keyExtractor={(item) => item.image}
      showsHorizontalScrollIndicator={false}
    />
  )  
}
