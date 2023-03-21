import axios from "axios";

export async function getAllTweets() {
  const { data } = await axios(
    `http://http://a680f12c80127465f883455a8b7edec1-2107361402.ap-northeast-2.elb.amazonaws.com/alltweets`,
  );

  return data;
}
