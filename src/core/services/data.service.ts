import axios from "axios";
import { Data, EndpointData } from "../models";

import { dataAdapter } from "../adapters";
import { Countries } from "@/common/enums";
import { loadAbort } from "@/common/utilities";

export const getData = async (
  selectedValue: string
): Promise<Array<Data> | null> => {
  const controller = loadAbort();

  try {
    const query =
      selectedValue == Countries.TODOS ? "" : `?country=${selectedValue}`;
    const response = await axios.get<EndpointData[]>(
      `${import.meta.env.VITE_API_BASE_URL}${query}`,
      {
        signal: controller.signal,
      }
    );

    const adaptedData = response.data;
    return adaptedData.map((item) => dataAdapter(item));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error: ${error.response?.data || error.message}`);
    } else {
      throw new Error(`Unexpected error: ${error}`);
    }
  }
};
