import React from 'react'
import { View, Text, IButtonProps, Button as ButtonNativeBase } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface Props extends IButtonProps {
  title:string
}

export default function Button({title}: Props) {
  return (
    <ButtonNativeBase w={340} h={49} rounded={20} color='type.water' _pressed={{bg: 'type.waterOpacity'}} >
      <Text fontSize='sm' color='#FFF' >{title}</Text>
    </ButtonNativeBase>
  )
}