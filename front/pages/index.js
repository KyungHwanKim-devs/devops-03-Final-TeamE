import styled from "@emotion/styled";
import Search from "../components/search";
import Trand from "../components/trand";
import TweetBox from "../components/tweetbox";
import { useAuth } from "../hooks/useAuth";
import { useGetAllTweets } from "../query/tweet";

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
`;

const LeftContainer = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #5d5d5d;
  border-left: 1px solid #5d5d5d;
  height: 100%;
  min-height: 100vh;
`;
const TopContainer = styled.div`
  color: white;
  font-size: x-large;
  font-weight: bold;
  border-bottom: 1px solid #5d5d5d;
  padding: 20px;
`;

const TweetBoxContainer = styled.div`
  border-bottom: 1px solid #5d5d5d;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TopTweetBox = styled.div`
  display: flex;
`;
const BottomTweetBox = styled.div`
  display: flex;
  justify-content: end;
`;
const TweetButton = styled.button`
  border: none;
  font-size: large;
  padding: 10px 40px;
  border-radius: 50px;
  margin: 10px 0px;
  background-color: rgb(29, 155, 240);
  color: #ffffff;
  cursor: pointer;
`;

const TweetAvartar = styled.div`
  background-color: white;
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;
const TweetInput = styled.input`
  padding: 5px 10px;
  outline: none;
  background-color: black;
  border: none;
  width: 600px;
  ::placeholder {
    color: #5d5d5d;
    font-size: x-large;
  }
`;
const RightContainer = styled.div`
  flex: 0.4;
`;

export default function Index() {
  const { data: tweetData, isLoading, isSuccess } = useGetAllTweets();
  const auth = useAuth();
  console.log("auth", auth);

  return (
    <BodyContainer>
      <LeftContainer>
        <TopContainer>Home</TopContainer>
        <TweetBoxContainer>
          <TopTweetBox>
            <TweetAvartar />
            <TweetInput placeholder="What's happening?" />
          </TopTweetBox>
          <BottomTweetBox>
            {/* {auth.isAuthenticated ? "STATUS: LOGIN" : "STATUS: NOT LOGIN"} */}
            {auth.isAuthenticated && <TweetButton>Tweet</TweetButton>}
          </BottomTweetBox>
        </TweetBoxContainer>
        {!isLoading &&
          isSuccess &&
          tweetData?.map((tweet, i) => <TweetBox key={i} tweet={tweet} />)}
      </LeftContainer>
      <RightContainer>
        <Search />
        <Trand />
      </RightContainer>
    </BodyContainer>
  );
}
