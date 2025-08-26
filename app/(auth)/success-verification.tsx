import CustomButton from '@/components/ui/CustomButton'
import icons from '@/constants/icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SuccessVerification = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-white'>
      <Image source={icons.contourLineRightTop} className='absolute top-10 right-0' />
      <Image source={icons.verifyBadge} className='w-24 h-24' />
      <View className='mt-4'>
        <Text className='text-2xl font-bold text-accentColor text-center'>Verification Successful!</Text>
        <Text className='text-sm text-textPrimaryColor text-center px-10 mt-4'>Your email has been verified successfully, you can now access your account</Text>
      </View>
      <CustomButton text='Proceed To Log In' className='bg-primaryColor p-5 rounded-lg mt-6 w-[83%]' onPress={() => router.push('/(auth)/sign-in')} />
      <Image source={icons.fineaseMark} className='absolute bottom-10' />
    </SafeAreaView>
  )
}

export default SuccessVerification