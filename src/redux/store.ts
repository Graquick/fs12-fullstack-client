import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import carouselSlice from "features/carousel/carouselSlice";


export const store = configureStore({
  reducer: {
    carousel: carouselSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
