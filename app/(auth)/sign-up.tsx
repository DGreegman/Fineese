import CustomButton from '@/components/ui/CustomButton';
import CustomTextInput from '@/components/ui/CustomTextInput';
import icons from '@/constants/icons';
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");


  return (
    <SafeAreaView className='flex justify-center items-center '>
      <View className='relative'>
        <Image source={icons.contourLineRightTop} className='absolute top-0 left-28' />
      </View>
      <View className='relative mt-32'>
        <Text className='text-3xl font-bold text-textPrimaryColor text-center'>Create Account</Text>
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

        <CustomTextInput
            label="Confirm Password"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChangeText={setConfirmPassword}
        />

        <CustomButton  text='Get Started' className='bg-primaryColor p-5 rounded-lg mt-10 w-[83%]' onPress={() => router.replace('/(auth)/verify-email')}/>

        <View className='flex flex-row justify-around items-end gap-16'>
            <Text className='text-[#333333]'>Already have an account?</Text>
            <Link href='/(auth)/sign-in' className='text-[#07A58E] mt-6'>Login Here</Link>
        </View>
        <View className='relative'>
            <Image source={icons.contourLineLeftBottom} className='absolute -bottom-0 right-28' />
        </View>
        <View className=''>
            <Text className='text-[#07A58E] text-center mt-4'>OR</Text>
        </View>
        <View className='flex justify-center items-center gap-4 mt-4'>
            <View className='flex flex-row justify-center items-center gap-x-4'>

                <Ionicons name="logo-google" size={30} color="#4285F4"  /><Text className='text-[#333333]'>Continue with Google</Text>
            </View>
            <View className='flex flex-row justify-center items-center gap-x-4'>
                <Ionicons name="logo-facebook" size={30} color="#1877F2"  /><Text className='text-[#333333]'>Continue with Facebook</Text>
            </View>
        </View>

        <View>
            <Text className='text-center mt-4 text-[#333333]'>
                {'By continuing you accept our '}
                <Link href="/terms-of-service" asChild>
                    <Text className='text-[#07A58E]'>terms of service</Text>
                </Link>
                {' and '}
                <Link href="/privacy-policy" asChild>
                <Text className='text-[#07A58E]'>privacy policy</Text>
                </Link>
            </Text>
        </View>
        <View className='relative flex justify-center items-center'>
            <Image source={icons.fineaseMark} className='absolute  top-20' />
        </View>
    </SafeAreaView>
  )
}

export default SignUp