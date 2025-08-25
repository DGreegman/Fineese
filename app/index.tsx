import icons from "@/constants/icons";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";

export default function Index() {

  useEffect(()=>{
    setTimeout(() => {
      router.replace('/onboarding');
    }, 2000);
  }, [])
  return (
    <View className='flex-1 bg-primaryColor'>
        <View className="flex-1 justify-center items-center">
            <Image source={icons.joined} className='w-[189px] h-[55px] mb-4' resizeMode='contain' />
            <Text className="text-white text-2xl px-10 text-center font-normal">Your Financial Journey Just Got Easy</Text>
        </View>
        <View className="pb-10 items-center">
            <Text className="text-white">Loading...</Text>
        </View>
    </View>
  );
}
