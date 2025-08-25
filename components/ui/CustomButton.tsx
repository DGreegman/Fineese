import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    text: string;
    onPress: ()=>void;
    disabled?: boolean;
    className: string;
    textStyle?: string;

}
const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, disabled, className, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`self-center ${className}`} disabled={disabled}>
        <Text className={`text-white text-center ${textStyle}`}> {text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton