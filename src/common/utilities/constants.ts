import { Countries } from '@/common/enums';
export const MOBILE_BREAKPOINT = 768;

export const countries = Object.values(Countries).map((country) => ({
  value: country,
  label: country,
}));


export const COUNTRY_SLICE_NAME = "country";
