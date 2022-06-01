import { TouchableOpacity, View, Text,Image } from 'react-native'
import React from 'react'
import {COLORS, SIZES,FONTS,SHADOWS, assets} from '../constants'
import { useLinkProps } from '@react-navigation/native'
export const CircleButton = (imgUrl,handlePress, ...props) => {
  return (
    <TouchableOpacity
    style={{
        width:40,
        height:40,
        right:10,
        top:10,
        backgroundColor:COLORS.white,
        position:'absolute',
        borderRadius:SIZES.extraLarge,
        alignItems:'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
    }}
    onPress={handlePress}
    >
        <Image
            source={assets.heart}
            resizeMode="contain"
            style={{width: 24, height:24}}
        />
     
    </TouchableOpacity>
  )
}

export const RectButton = (minWidth, fontSize, handlePress, ...props) => {
    return (
        <TouchableOpacity
        style={{

            backgroundColor:COLORS.primary,
            borderRadius:SIZES.extraLarge,
            alignItems:'center',
            minWidth: minWidth,
            padding: SIZES.small,
            ...props,
        }}
        onPress={handlePress}
        >
            <Text style={{
                fontFamily:FONTS.semiBold,
                fontSize:fontSize,
                color:COLORS.white,
                textAlign:'center'
            }}>
                Place a bid
            </Text>
         
        </TouchableOpacity>
      )
    }