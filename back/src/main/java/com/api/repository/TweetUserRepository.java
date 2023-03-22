package com.api.repository;

import com.api.domain.Tweet;
import com.api.domain.Tweetuser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TweetUserRepository extends JpaRepository<Tweetuser, Long> {
}
