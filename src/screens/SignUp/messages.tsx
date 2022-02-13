import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { Themes } from '../../../themes/themes';

type Props = {
  initialText: string;
  registerText: string;
  finishText: string;
}

export const Messages = ({ initialText, registerText, finishText }: Props) => {
  return (
    <>
      <Text
        style={styles.message}>
        {initialText}
      </Text>
      <Text style={styles.register}>
        {registerText}
      </Text>
      <Text
        style={styles.message}>
        {finishText}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Themes.colors.whiteOpacity,
  },
  register:{
    fontWeight: 'bold', 
    color: Themes.colors.white
  }
})
