package com.api.DTO.tweet;

import com.api.domain.Tweet;
import lombok.*;

import javax.validation.constraints.NotNull;

public class CreateTweet {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Request {

        @NotNull
        private String tweetContent;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private String tweetContent;
        public static Response from(Tweet tweet) {
            return Response.builder()
                    .tweetContent(tweet.getContent())
                    .build();
        }
    }

}
