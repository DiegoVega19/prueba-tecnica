

import { COUNTRY_SLICE_NAME } from "@/common/utilities/constants";
import CountrySlice from "@/core/pages/home/features/select_country_slice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    [COUNTRY_SLICE_NAME]: CountrySlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;