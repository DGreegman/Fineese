import CustomButton from '@/components/ui/CustomButton'
import CustomTextInput from '@/components/ui/CustomTextInput'
import icons from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView, Image, Text, View } from 'react-native'

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-white'>
      <Image source={icons.contourLineRightTop} className='absolute top-10 right-0' />
      
      <View className='mt-4'>
        <Text className='text-3xl font-bold text-textPrimaryColor text-center'>Forgot Password</Text>
        <Text className='text-base text-textPrimaryColor text-center px-10 mt-4'>Enter Email Address</Text>
      </View>
      
        <CustomTextInput label='Email' value={email} onChangeText={setEmail} placeholder='Enter your email address'/>
        <CustomTextInput label='Password' value={password} onChangeText={setPassword} placeholder='Enter your password' />

      <CustomButton text='Reset Password' className='bg-primaryColor p-5 rounded-lg mt-6 w-[83%]' onPress={() => {}} />
      
      <View className='flex flex-row justify-around gap-x-20 mt-4'>
        <Text className='text-sm text-textPrimaryColor'>Don't Have Account Yet?</Text>
        <Link href={'/(auth)/sign-up'} className='text-sm text-accentColor'>Create Account</Link>
      </View>
      <Image source={icons.fineaseMark} className='absolute bottom-10' />
    </SafeAreaView>
  )
}

export default ForgotPassword