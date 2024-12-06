import {AppContainer} from '@/Components';
import {CommonStyle} from '@/Theme';
import React from 'react';
import {Text, View} from 'react-native';

export default () => {
  return (
    <AppContainer>
      <View style={CommonStyle.centerFlex}>
        <Text>{'Search'}</Text>
      </View>
    </AppContainer>
  );
};
