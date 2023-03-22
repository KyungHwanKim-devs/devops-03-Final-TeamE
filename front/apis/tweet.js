import axios from "axios";

export async function getAllTweets() {
  const { data } = await axios(
    `http://aacba4d4c44c0408da66cc44767126f7-1027611221.ap-northeast-2.elb.amazonaws.com/alltweets`,
    // `http://localhost:8080/alltweets`,
  );

  return data;
}

export async function createTweet(content) {
  console.log("content in useCreateapis", content);

  const { data } = await axios.post(
    `http://aacba4d4c44c0408da66cc44767126f7-1027611221.ap-northeast-2.elb.amazonaws.com/tweet`,
    // `http://localhost:8080/tweet`,
    content,
  );

  return data;
}
