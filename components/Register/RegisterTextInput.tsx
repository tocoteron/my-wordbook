import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface Props {
  maxLength: number;
  value: string;
  defaultValue?: string;
  onChangeText?: (text: string) => void;
}

function RegisterTextInput(props: Props) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(props.value);
  }, [props.value]);

  return (
    <TextInput
      style={getDynamicTextInputStyle(text).style}
      placeholder="Paste text here to register!"
      value={text}
      defaultValue={props.defaultValue}
      multiline
      maxLength={props.maxLength}
      underlineColorAndroid="chocolate"
      onChangeText={(changedText: string) => {
        setText(changedText);
        if (props.onChangeText) {
          props.onChangeText(changedText);
        }
      }}
    />
  );
}

function getDynamicTextInputStyle(text: string) {
  return StyleSheet.create({
    style: {
      height: 192,
      textAlign: text.length === 0 ? 'center' : 'left',
    },
  });
}

export default RegisterTextInput;
