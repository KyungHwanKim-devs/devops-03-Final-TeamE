package com.api.domain;


import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tweetuser")
public class Tweetuser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tweetuser_id")
    private Long id;

    @NotNull
    @Column(name = "tweetuser_nickname", unique = true)
    private String tweetuserNickname;

    @NotNull
    @Column(name = "tweetuser_email", unique = true)
    private String tweetuserEmail;

    @OneToMany(mappedBy = "tweetuser")
    private List<Tweet> tweetList = new ArrayList<>();

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
