import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {Colors} from '@/Theme';

interface AppContainerProps {
  isTopSafeArea?: boolean;
  isBottomSafeArea?: boolean;
  children: React.ReactNode;
}

export default (props: AppContainerProps) => {
  const {isTopSafeArea = true, isBottomSafeArea, children} = props;
  const TopComponent = isTopSafeArea ? SafeAreaView : View;
  const BottomComponent = isBottomSafeArea ? SafeAreaView : View;

  return (
    <View style={styles.container}>
      <TopComponent />
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <View style={styles.container}>{children}</View>
      <BottomComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
