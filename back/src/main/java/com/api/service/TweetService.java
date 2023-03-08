package com.api.service;

import com.api.DTO.tweet.TweetDTO;

import java.util.List;

public interface TweetService {
    List<TweetDTO> getAllTweets();
}
