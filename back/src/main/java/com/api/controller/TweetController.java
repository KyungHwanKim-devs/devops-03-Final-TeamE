package com.api.controller;

import com.api.DTO.tweet.TweetDTO;
import com.api.domain.Tweet;
import com.api.service.TweetService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
public class TweetController {
    private final TweetService tweetService;

    @Operation(summary = "모든 트윗 조회.", description = "조건없이 모든 트윗을 가져옵니다.")
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "조회 성공",
                    content = @Content(schema = @Schema(implementation = Tweet.class))),
            @ApiResponse(
                    responseCode = "400",
                    description = "조회 실패",
                    content = @Content(schema = @Schema(implementation = Error.class)))
    })
    @GetMapping("/alltweets")
    public ResponseEntity<List<TweetDTO>> getAllTweets() {
        return ResponseEntity.ok(tweetService.getAllTweets());
    }
}
