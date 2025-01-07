import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

;
import { COUNTRY_SLICE_NAME } from "@/common/utilities/constants";
import { CountryAction, CountryState } from '../models/definitions/feature_definitions';
import { Countries } from "@/common/enums";

const initialState: CountryState = {
  country: Countries.TODOS.toString(),
};

const CountrySlice = createSlice({
  name: COUNTRY_SLICE_NAME,
  initialState,
  reducers: {
    selectCountry: (
      state: Draft<typeof initialState>,
      action: PayloadAction<CountryAction>
    ) => {
      state.country = action.payload.selectedCountry;
    },
  },
});

export const { selectCountry } = CountrySlice.actions;

export default CountrySlice;