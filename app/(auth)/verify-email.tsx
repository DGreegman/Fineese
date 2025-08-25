import CustomButton from '@/components/ui/CustomButton';
import VerificationCodeInput from '@/components/ui/VerificationCodeInput';
import icons from '@/constants/icons';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const VerifyEmail = () => {
  const [code, setCode] = React.useState("");

  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-white'>
      <View className='absolute top-16 left-4'>
        <Ionicons name="arrow-back" size={24} onPress={() => router.back()} />
      </View>
      <Image source={require('@/assets/icons/illustration2.png')} className='w-32 h-32' />
      <Text className='text-3xl font-bold text-textPrimaryColor text-center mt-4'>Email Verification</Text>
      <Text className='text-base text-textPrimaryColor text-center mt-2'>We have sent a verification code to your email</Text>

      <VerificationCodeInput onCodeFilled={setCode} />

      <View className='flex-row items-center mt-4'>
        <Text className='text-textPrimaryColor'>Didn't Get A Code? </Text>
        <Text className='text-primaryColor'>Resend</Text>
      </View>

      <CustomButton text='Verify' className='bg-primaryColor p-5 rounded-lg mt-10 w-[83%]' onPress={() => {}} />
      
      <Image source={icons.fineaseMark} className='absolute bottom-10' />

    </SafeAreaView>
  );
}

export default VerifyEmail;
