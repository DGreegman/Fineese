import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

interface CustomTextInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput = ({ label, value, placeholder, onChangeText }: CustomTextInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const isPassword = placeholder.toLowerCase().includes('password');

  return (
    <View className='w-full px-10 mt-5'>
        <TextInput
            label={label}
            mode='outlined'
            secureTextEntry={isPassword && !isPasswordVisible}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={{width: '100%', paddingLeft: 10, color: '#888888'}} 
            outlineColor="#555555"
            activeOutlineColor="#ACE1D9"
            right={
                isPassword ? (
                    <TextInput.Icon icon={isPasswordVisible ? "eye" : "eye-off"} onPress={() => setIsPasswordVisible(!isPasswordVisible)} />
                ): null
            }
            theme={{
                colors: {
                    text: '#000000',
                    placeholder: '#888888',
                    background: '#F5F5F5',
                },
                roundness: 12,
            }}
        />

      </View>
  )
}

export default CustomTextInput