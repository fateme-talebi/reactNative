import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface Props {
  imageUri?: string;
}

const CircularImgView = ({ imageUri }: Props) => {
  return (
    <View>
      <Image 
      //@ts-ignore
        source={imageUri} 
        style={styles.circularImgView} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circularImgView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'rgb(203, 181, 255)',
  },
});

export default CircularImgView;
