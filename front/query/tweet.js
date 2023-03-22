import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTweet, getAllTweets } from "../apis/tweet";

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

export function useCreateTweets(content) {
  console.log("content in useCreateTweets", content);
  const queryClient = useQueryClient();
  return useMutation(() => createTweet(content), {
    onSuccess: () => {
      queryClient.invalidateQueries(["tweets"]);
    },
  });
}
