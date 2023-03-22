package com.api.service;

import com.api.DTO.tweet.TweetDTO;
import com.api.domain.Tweet;

import java.util.List;

public interface TweetService {
    List<TweetDTO> getAllTweets();

    Tweet createTweet(String tweetContent);
}
