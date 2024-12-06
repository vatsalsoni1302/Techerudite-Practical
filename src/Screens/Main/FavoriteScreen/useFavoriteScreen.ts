import {setFavorite} from '@/Redux/Reducers/EventsSlice';
import _ from 'lodash';
import {useCallback} from 'react';

import {useDispatch, useSelector} from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const stateEvents = useSelector((state: StateType) => state?.events?.events);
  const events = _.filter(stateEvents, i => i?.isFavorite === 1);

  const onPressFavorite = useCallback(
    (id: number) => {
      dispatch(setFavorite(id));
    },
    [dispatch],
  );

  return {
    events,
    onPressFavorite,
  };
};
