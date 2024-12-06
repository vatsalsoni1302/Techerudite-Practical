import {moderateScale, scale} from '@/Helpers/Responsive';
import {Colors, Fonts} from '@/Theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default () => {
  const {usr_fname} = useSelector((state: StateType) => state?.user?.userData);
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{`Hello ${usr_fname}!`}</Text>
      <Text style={styles.descTextStyle}>Are you ready to dance?</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: Fonts.ThemeBold,
    fontSize: moderateScale(26),
    color: Colors.black,
  },
  descTextStyle: {
    fontFamily: Fonts.ThemeRegular,
    fontSize: moderateScale(16),
    color: Colors.greyShade8282,
  },
  container: {
    backgroundColor: Colors.white,
    padding: scale(30),
  },
});
