import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getData } from "@/core/services/data.service";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import CountrySlice from '../features/select_country_slice';
import { getCountryState } from "../features/select_country_selector";

const useGetData = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const { country } = useAppSelector(getCountryState);

  const { data, isLoading, error } = useQuery({
    queryKey: ["data", { country }],
    queryFn: () => getData(country),
  });

  const updateSelectedCountry = (country:string) => {
    dispatch(CountrySlice.actions.selectCountry({selectedCountry: country}));
    queryClient.invalidateQueries({
      queryKey: ["data", { country }],
    });
  };

  return {
    data,
    isLoading,
    error,
    updateSelectedCountry,
  };
};

export default useGetData;
