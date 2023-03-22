package com.api.apiserver.DTO.artist;

import com.api.apiserver.DTO.cartsitem.CartsItemDTO;
import com.api.apiserver.domain.Artist;
import lombok.*;

import javax.validation.constraints.NotNull;

public class CreateArtist {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Request {

        @NotNull
        private String artistName;

        @NotNull
        private Long companyId;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private String artistName;
        public static Response from(Artist artist) {
            return Response.builder()
                    .artistName(artist.getName())
                    .build();
        }
    }

}
