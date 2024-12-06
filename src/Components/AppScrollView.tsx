import React from 'react';
import {Platform, ScrollViewProps, StyleProp, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface AppScrollViewProps extends ScrollViewProps {
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  stickyHeaderIndices?: number[];
}

export default (props: AppScrollViewProps) => {
  const {
    children,
    stickyHeaderIndices,
    style,
    contentContainerStyle = {},
  } = props;
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={contentContainerStyle}
      style={style}
      bounces={false}
      extraHeight={45}
      extraScrollHeight={Platform.OS === 'ios' ? 70 : 10}
      stickyHeaderIndices={stickyHeaderIndices}
      {...props}>
      {children}
    </KeyboardAwareScrollView>
  );
};
