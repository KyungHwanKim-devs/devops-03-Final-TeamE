package com.api.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("중꺽마 api 서버의 API 명세서")
                        .description("중걱마의 프론트 서버와의 통신을 담당하는 RESTful-API 서버")
                        .version("v1"));
    }
}