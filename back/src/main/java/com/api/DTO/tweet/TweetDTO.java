package com.api.DTO.tweet;

import com.api.domain.Tweet;
import lombok.*;

import java.time.LocalDateTime;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TweetDTO {

        private Long id;
        private String userName;
        private String content;
        private LocalDateTime createdAt;

        public static TweetDTO fromEntity(Tweet tweet) {
            return TweetDTO.builder()
                    .id(tweet.getId())
                    .userName(tweet.getTweetuser().getTweetuserNickname())
                    .content(tweet.getContent())
                    .createdAt(tweet.getCreatedAt())
                    .build();
        }

}
