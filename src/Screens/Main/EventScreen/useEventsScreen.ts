import {APICall, EndPoints} from '@/Network';
import {setEventsData, setFavorite} from '@/Redux/Reducers/EventsSlice';
import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default () => {
  const events = useSelector((state: StateType) => state?.events?.events);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const onPressFavorite = useCallback(
    (id: number) => {
      dispatch(setFavorite(id));
    },
    [dispatch],
  );

  const getEvents = useCallback(() => {
    APICall('post', {}, EndPoints.eventsListing, {
      'Content-Type': 'multipart/form-data',
    })
      .then((resp: any) => {
        if (resp.status === 200 && resp.data?.data) {
          dispatch(setEventsData(resp?.data?.data?.events));
        } else {
          Alert.alert('Something went wrong');
        }
      })
      .catch(() => {
        Alert.alert('Something went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {events, isLoading, onPressFavorite};
};
