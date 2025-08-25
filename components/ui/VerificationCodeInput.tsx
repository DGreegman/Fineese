
import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

interface VerificationCodeInputProps {
  length?: number;
  onCodeFilled: (code: string) => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({ length = 4, onCodeFilled }) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<TextInput[]>([]);

  const handleTextChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text.length === 1 && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    if (newCode.every(c => c.length === 1)) {
      onCodeFilled(newCode.join(''));
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {code.map((_, index) => (
        <TextInput
          key={index}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => handleTextChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          ref={(ref) => (inputs.current[index] = ref as TextInput)}
          value={code[index]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  input: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
    textAlign: 'center',
    fontSize: 24,
  },
});

export default VerificationCodeInput;
