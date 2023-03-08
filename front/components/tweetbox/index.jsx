import styled from "@emotion/styled";
import React from "react";
import ArrowPath from "../icons/ArrowPath";
import ArrowUpTray from "../icons/ArrowUpTray";
import ChatBubbleLeft from "../icons/ChatBubbleLeft";
import Heart from "../icons/Heart";

const TweetBoxContainer = styled.div`
  border-bottom: 1px solid #5d5d5d;
  display: flex;
  padding: 20px;
`;

const LeftTweetBox = styled.div`
  display: flex;
`;

const TweetContent = styled.div`
  padding: 5px 10px;
  outline: none;
  background-color: black;
  border: none;
  /* width: 600px; */
  color: white;
`;
const TweetAuther = styled.div`
  padding: 5px 10px;
  outline: none;
  background-color: black;
  border: none;
  /* width: 600px; */
  color: white;
  font-weight: bold;
  font-size: larger;
`;

const RightTweetBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  padding-left: 10px;
`;

const TweetButtonContainer = styled.div`
  display: flex;
`;

const TweetButton = styled.button`
  border: none;
  font-size: large;
  display: flex;
  align-items: center;
  /* padding: 10px 10px;
  border-radius: 50px;
  margin: 10px 0px; */
  margin: 10px 50px 0px 0px;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  > svg {
    color: #a4a4a4a3;
    height: 28px;
  }
`;
const TweetButtonText = styled.div`
  color: #a4a4a4a3;
  padding-left: 10px;
`;

const TweetAvartar = styled.div`
  background-color: white;
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

export default function TweetBox({ tweet }) {
  return (
    <TweetBoxContainer>
      <LeftTweetBox>
        <TweetAvartar />
      </LeftTweetBox>
      <RightTweetBox>
        <TweetAuther>{tweet.userName}</TweetAuther>
        <TweetContent>{tweet.content}</TweetContent>
        <TweetButtonContainer>
          <TweetButton>
            <Heart />
            <TweetButtonText>333</TweetButtonText>
          </TweetButton>
          <TweetButton>
            <ArrowPath /> <TweetButtonText>123 </TweetButtonText>
          </TweetButton>
          <TweetButton>
            <ChatBubbleLeft /> <TweetButtonText>123</TweetButtonText>
          </TweetButton>
          <TweetButton>
            <ArrowUpTray />
          </TweetButton>
        </TweetButtonContainer>
      </RightTweetBox>
    </TweetBoxContainer>
  );
}
