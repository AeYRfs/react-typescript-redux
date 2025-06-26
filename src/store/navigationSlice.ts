import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Page = 'home' | 'about' | 'contact';

interface NavigationState {
  currentPage: Page;
}

const initialState: NavigationState = {
  currentPage: 'home',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = navigationSlice.actions;
export default navigationSlice.reducer;
export type page = 'home' | 'about' | 'contact';