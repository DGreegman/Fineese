import CustomButton from '@/components/ui/CustomButton';
import { onboardingData } from '@/data/onboarding.data';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';

const OnboardingScreen = () => {
    const swiperRef = useRef<Swiper>(null)
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboardingData.length - 1;
    const handleNext = () => {
        swiperRef.current?.scrollBy(1)
    }

  return (
    <View className='flex-1 bg-secondaryColor'>
        <Swiper
            ref={swiperRef}
            loop={false}
            dot={<View className='w-[10px] h-[10px] mx-1  bg-[#989898] rounded-full' />}
            activeDot={<View className='w-[10px] h-[10px] mx-1  bg-primaryColor rounded-full' />}
            onIndexChanged={(index) => setActiveIndex(index)}
            className='flex-1'
        >
            {
                onboardingData.map((item, index) => (
                <View key={index}>
                    <View className='m-14'>
                        <Image source={item.illustration} className='w-full' resizeMode='contain' />

                    </View>
                    <View className='bg-[#FEFEFE] rounded-t-[48px] h-full'>
                        <Text className='p-14 text-textPrimaryColor text-center text-2xl'>{item.content}</Text>
                        <Text className='p-2 px-14 text-textPrimaryColor text-center text-base'>{item.description}</Text>
                        {/* <TouchableOpacity onPress={handleNext} className='items-end justify-end px-6'>
                            <Text className='text-textPrimaryColor'> Next</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
                ))
            }
        </Swiper>
        <View className='bg-[#FEFEFE]'>

            {
                isLastSlide ? (
                    <CustomButton text='Get Started' onPress={() => router.replace('/(auth)/sign-up')} className='mx-4 w-[90%] py-4 rounded-lg  mb-12 bg-primaryColor' />
                ) : (
                    <TouchableOpacity onPress={handleNext} className='justify-end items-end px-6 py-14'>
                        <Text className='text-textPrimaryColor'> Next</Text>
                    </TouchableOpacity>
                )
            }
        </View>
        <StatusBar backgroundColor='#000' />
    </View>
  )
}

export default OnboardingScreen