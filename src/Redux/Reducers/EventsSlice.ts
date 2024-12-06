import {createSlice} from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState: {
  events: EventType[]; // as per requirement
} = {
  events: [],
};
const EventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEventsData: (state, action) => {
      state.events = action.payload;
    },

    setFavorite: (state, action) => {
      let clone = _.cloneDeep(state.events);
      const index = _.findIndex(
        clone,
        i => i?.event_date_id === action.payload,
      );
      clone[index].isFavorite = clone[index]?.isFavorite === 0 ? 1 : 0;
      state.events = clone;
    },
  },
});
export const {setEventsData, setFavorite} = EventSlice.actions;
export default EventSlice.reducer;
