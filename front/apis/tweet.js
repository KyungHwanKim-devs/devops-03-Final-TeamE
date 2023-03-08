import axios from "axios";

export async function getAllTweets() {
  const { data } = await axios(`http://localhost:8080/alltweets`);

  return data;
}
