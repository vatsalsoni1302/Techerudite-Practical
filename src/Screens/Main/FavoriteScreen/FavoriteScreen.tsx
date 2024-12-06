import {AppContainer, AppHeader, EventItem} from '@/Components';
import {Colors, CommonStyle} from '@/Theme';
import React, {useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {scale} from '@/Helpers/Responsive';
import useFavoriteScreen from './useFavoriteScreen';

export default () => {
  const {events, onPressFavorite} = useFavoriteScreen();

  const renderItem = useCallback(
    ({item}: ListItem<EventType>) => (
      <EventItem
        onPress={() => onPressFavorite(item?.event_date_id)}
        item={item}
      />
    ),
    [onPressFavorite],
  );

  const renderSeparator = useMemo(() => {
    return <View style={styles.separator} />;
  }, []);

  return (
    <AppContainer>
      <View style={styles.container}>
        <AppHeader />
        <FlatList
          data={events}
          contentContainerStyle={styles.contentContainerStyle}
          ItemSeparatorComponent={() => renderSeparator}
          ListEmptyComponent={
            <View style={CommonStyle.centerFlex}>
              <Text>No Favorites</Text>
            </View>
          }
          renderItem={renderItem}
        />
      </View>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyShadeF2,
  },
  separator: {
    margin: scale(5),
  },
  contentContainerStyle: {
    margin: scale(10),
  },
});
