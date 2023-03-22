import axios from "axios";

export async function getAllTweets() {
  const { data } = await axios(
    // `http://a680f12c80127465f883455a8b7edec1-2107361402.ap-northeast-2.elb.amazonaws.com/alltweets`,
    `http://localhost:8080/alltweets`,
  );

  return data;
}

export async function createTweet(content) {
  console.log("content in useCreateapis", content);

  const { data } = await axios.post(
    // `http://a680f12c80127465f883455a8b7edec1-2107361402.ap-northeast-2.elb.amazonaws.com/tweet`,
    `http://localhost:8080/tweet`,
    content,
  );

  return data;
}
