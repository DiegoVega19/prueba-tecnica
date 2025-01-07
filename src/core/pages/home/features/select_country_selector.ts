import { COUNTRY_SLICE_NAME } from "@/common/utilities/constants";
import { CountryState } from "../models/definitions";
import { RootState } from "@/lib/redux/store";


export const getCountryState = (state: RootState):  CountryState => state[COUNTRY_SLICE_NAME];