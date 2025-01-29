import useSWR from "swr";
import axios from "axios";
import { Breed } from "../types";
import { API } from "../constants";

const getBreeds = (url: string) => axios.get(`${API}${url}`).then((res) => res.data);

function useBreeds() {
  const { data, isLoading, error } = useSWR<Breed[]>("/breeds", getBreeds);
  return {
    data,
    isLoading,
    error,
  };
}

export default useBreeds;