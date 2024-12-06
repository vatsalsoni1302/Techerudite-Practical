import {moderateScale, scale} from '@/Helpers/Responsive';
import {Colors, Fonts} from '@/Theme';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface AppButtonProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export default ({onPress, title, style = {}}: AppButtonProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.greenShade,
    padding: scale(10),
    paddingHorizontal: scale(28),
    borderRadius: moderateScale(4),
  },
  textStyle: {
    fontSize: moderateScale(16),
    color: Colors.white,
    fontFamily: Fonts.ThemeMedium,
  },
});
