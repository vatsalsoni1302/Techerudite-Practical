import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {SvgFromXml} from 'react-native-svg';
import SVGByteCode from '@/Theme/SVGByteCode';
import {
  heightPx,
  moderateScale,
  scale,
  verticalScale,
} from '@/Helpers/Responsive';
import {AppContainer, AppInput, AppScrollView} from '@/Components';
import {Colors, Fonts} from '@/Theme';
import AppButton from '@/Components/AppButton';
import {Images} from '@/Helpers';
import useLoginScreen from './useLoginScreen';

export default () => {
  const {email, onPressLogin, password, setEmail, onPressVoid, setPassword} =
    useLoginScreen();
  return (
    <AppContainer>
      <AppScrollView>
        <ImageBackground style={styles.container}>
          <SvgFromXml xml={SVGByteCode.logo} />
        </ImageBackground>
        <View style={styles.innerContainer}>
          <AppInput
            value={email}
            returnKeyType="next"
            onChangeText={setEmail}
            placeholder="Email"
          />
          <AppInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            isPassword
            onSubmitEditing={onPressLogin}
            returnKeyType="done"
          />
          <TouchableOpacity onPress={onPressVoid}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <AppButton
            onPress={onPressLogin}
            style={styles.buttonStyle}
            title="Sign In"
          />
          <TouchableOpacity>
            <Text style={[styles.forgotText, styles.noMemberText]}>
              Not a member?{' '}
              <Text style={[styles.strikeText]} onPress={onPressVoid}>
                Sign Up Here
              </Text>
            </Text>
          </TouchableOpacity>
          <View style={styles.stepContainer}>
            <View style={styles.lineView} />
            <Text style={styles.stepTextStyle}>or Sign In with:</Text>
            <View style={styles.lineView} />
          </View>
          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={onPressVoid}>
              <Image source={Images.google} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressVoid}>
              <Image source={Images.apple} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressVoid}>
              <Image source={Images.facebook} />
            </TouchableOpacity>
          </View>
          <Text style={styles.forgotText}>Enter as Guest</Text>
        </View>
      </AppScrollView>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heightPx(35),
    backgroundColor: Colors.greyShadeCCC,
    alignItems: 'center',
    paddingTop: verticalScale(20),
  },
  innerContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: scale(20),
  },
  forgotText: {
    fontFamily: Fonts.ThemeRegular,
    alignSelf: 'flex-end',
    fontSize: moderateScale(12),
    color: Colors.greyShade8282,
    marginLeft: 'auto',
  },
  buttonStyle: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(20),
  },
  noMemberText: {
    marginTop: verticalScale(20),
    color: Colors.black,
  },
  strikeText: {
    textDecorationLine: 'underline',
  },
  lineView: {
    height: verticalScale(1),
    backgroundColor: Colors.gryShade4F4f,
    flex: 1,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    columnGap: scale(5),
    marginVertical: verticalScale(50),
  },
  stepTextStyle: {
    fontFamily: Fonts.ThemeRegular,
    fontSize: moderateScale(12),
    color: Colors.gryShade4F4f,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(15),
  },
});
