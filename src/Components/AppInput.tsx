import {moderateScale, scale, verticalScale} from '@/Helpers/Responsive';
import {Colors, Fonts} from '@/Theme';
import SVGByteCode from '@/Theme/SVGByteCode';
import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SvgFromXml} from 'react-native-svg';

interface AppInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  isPassword?: boolean;
}

export default (props: AppInputProps) => {
  const {containerStyle, isPassword = false, ...rest} = props;
  const [isSecure, setIsSecure] = useState(isPassword);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.placeHolderStyle}>{rest?.placeholder}</Text>
      <View style={styles.innerContainer}>
        <TextInput
          {...rest}
          style={[styles.inputStyle, props?.style ?? {}]}
          secureTextEntry={isSecure}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => setIsSecure(state => !state)}>
            <SvgFromXml
              xml={isSecure ? SVGByteCode.eye : SVGByteCode.eye_off}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
  },
  placeHolderStyle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.ThemeRegular,
    color: Colors.black,
  },
  inputStyle: {
    height: verticalScale(55),
    borderRadius: moderateScale(4),
    paddingHorizontal: scale(10),
    width: '100%',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: Colors.white,
    marginTop: verticalScale(10),
    borderRadius: moderateScale(4),
  },
  iconStyle: {
    right: scale(30),
  },
});
