package com.api.service;

import com.api.DTO.tweet.TweetDTO;
import com.api.domain.Tweet;
import com.api.repository.TweetRepository;
import com.api.repository.TweetUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class TweetServiceImpl implements TweetService{
    private final TweetRepository tweetRepository;
    private final TweetUserRepository tweetUserRepository;
    @Override
    public List<TweetDTO> getAllTweets() {
        return tweetRepository.findAll()
                .stream().map(TweetDTO::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public Tweet createTweet(String tweetContent) {
        return tweetRepository.save(Tweet.builder()
                .tweetuser(tweetUserRepository.findById(22222L).orElseThrow())
                .content(tweetContent)
                .build());
    }
}
