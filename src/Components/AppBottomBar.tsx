import {moderateScale, scale, verticalScale} from '@/Helpers/Responsive';
import {Colors, Fonts} from '@/Theme';
import SVGByteCode from '@/Theme/SVGByteCode';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SvgFromXml} from 'react-native-svg';

const TabsImageObject: Record<string, any> = {
  Search: SVGByteCode.search,
  Events: SVGByteCode.calender,
  Favorites: SVGByteCode.favorite,
  Profile: SVGByteCode.profile,
};

export default (props: BottomTabBarProps) => {
  const {state, descriptors, navigation} = props;
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        ) as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={label + route.key}
            onLongPress={onLongPress}
            style={styles.tabContainer}>
            <SvgFromXml
              height={verticalScale(26)}
              width={verticalScale(26)}
              xml={TabsImageObject[label](isFocused)}
            />
            <Text style={styles.tabTitleStyle}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  tabTitleStyle: {
    fontSize: moderateScale(10),
    fontFamily: Fonts.ThemeRegular,
    color: Colors.black,
    marginTop: verticalScale(5),
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    padding: scale(10),
    backgroundColor: Colors.white,
  },
});
