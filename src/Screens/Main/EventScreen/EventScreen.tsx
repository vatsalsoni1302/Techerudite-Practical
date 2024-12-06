import {AppContainer, AppHeader, EventItem} from '@/Components';
import {Colors, CommonStyle} from '@/Theme';
import React, {useCallback, useMemo} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useEventsScreen from './useEventsScreen';
import {scale} from '@/Helpers/Responsive';

export default () => {
  const {events, isLoading, onPressFavorite} = useEventsScreen();

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
        {isLoading ? (
          <View style={CommonStyle.centerFlex}>
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            data={events}
            contentContainerStyle={styles.contentContainerStyle}
            ItemSeparatorComponent={() => renderSeparator}
            ListEmptyComponent={
              <View style={CommonStyle.centerFlex}>
                <Text>No Data Found</Text>
              </View>
            }
            renderItem={renderItem}
          />
        )}
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
