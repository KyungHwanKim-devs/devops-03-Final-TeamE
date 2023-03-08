import { useQuery } from "@tanstack/react-query";
import { getAllTweets } from "../apis/tweet";

export const useGetAllTweets = () => {
  return useQuery({
    queryKey: ["tweets"],
    queryFn: () => {
      const data = getAllTweets();
      return data;
    },
    onError: (e) => {
      console.log("e", e);
    },
  });
};
