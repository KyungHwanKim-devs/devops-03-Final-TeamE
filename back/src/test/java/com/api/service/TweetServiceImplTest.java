package com.api.service;

import com.api.DTO.tweet.TweetDTO;
import com.api.domain.Tweet;
import com.api.domain.Tweetuser;
import com.api.repository.TweetRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
@SpringBootTest
class TweetServiceImplTest {

    @Mock
    private TweetRepository tweetRepository;

    @InjectMocks
    private TweetServiceImpl tweetService;

    @Test
    void getTweetLists_success() {
        //given 어떤 데이터가 주어졌을 때

        Tweetuser tweetuser = Tweetuser.builder()
                .tweetuserNickname("닉네임")
                .build();

        List<Tweet> tweets = Arrays.asList(
                Tweet.builder()
                        .tweetuser(tweetuser)
                        .content("내용1")
                        .build(),
                Tweet.builder()
                        .tweetuser(tweetuser)
                        .content("내용2")
                        .build(),
                Tweet.builder()
                        .tweetuser(tweetuser)
                        .content("내용3")
                        .build()
        );

        given(tweetRepository.findAll())
                .willReturn(tweets);

        //when 어떤 경우에
        List<TweetDTO> tweetDTOs = tweetService.getAllTweets();
        //then 이런 결과가 나온다.
        assertEquals("내용1",tweetDTOs.get(0).getContent());
        assertEquals("내용2",tweetDTOs.get(1).getContent());
        assertEquals("내용3",tweetDTOs.get(2).getContent());
    }

}