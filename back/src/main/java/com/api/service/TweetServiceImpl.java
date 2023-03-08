package com.api.service;

import com.api.DTO.tweet.TweetDTO;
import com.api.repository.TweetRepository;
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
    @Override
    public List<TweetDTO> getAllTweets() {
        return tweetRepository.findAll()
                .stream().map(TweetDTO::fromEntity)
                .collect(Collectors.toList());
    }
}
