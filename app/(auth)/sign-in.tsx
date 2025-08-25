import CustomButton from '@/components/ui/CustomButton';
import CustomTextInput from '@/components/ui/CustomTextInput';
import icons from '@/constants/icons';
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


  return (
    <SafeAreaView className=' justify-center items-center '>
      <View className='relative'>
        <Image source={icons.contourLineRightTop} className='absolute top-0 left-28' />
      </View>
      <View className='relative mt-52'>
        <Text className='text-3xl font-bold text-textPrimaryColor text-center'>Log In</Text>
        <Text className='text-base text-textPrimaryColor text-center'>Your financial journey just got easy</Text>
      </View>

      <CustomTextInput
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChangeText={setEmail}
      />

      <CustomTextInput
        label="Password"
        value={password}
        placeholder="Enter your password"
        onChangeText={setPassword}
      />

      <Link href='/(auth)/forgot-password' className='text-[#333333] mt-6'>
        <Text>Forgot Password?</Text>
      </Link>

      <CustomButton  text='Log In' className='bg-primaryColor p-5 rounded-lg mt-10 w-[83%]' onPress={() => router.replace('/(auth)/sign-in')}/>
      <View className='flex flex-row justify-around items-end gap-16'>
        <Text className='text-[#333333]'>Don't have an account?</Text>
        <Link href='/(auth)/sign-up' className='text-[#07A58E] mt-6'>
          <Text>Sign Up</Text>
        </Link>
      </View>
     <View className='relative'>
        <Image source={icons.contourLineLeftBottom} className='absolute -bottom-0 right-28' />
      </View>

      <View className='relative flex justify-center items-center'>
          <Image source={icons.fineaseMark} className='absolute  top-40' />
      </View>
    </SafeAreaView>
  )
}

export default SignIn