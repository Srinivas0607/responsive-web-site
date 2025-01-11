package com.ecommerce.demo.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;

@Configuration
public class JwtConfig {

    @Bean
    public JwtDecoder jwtDecoder() {
        // Replace with your actual public key or JWK set URI
        String jwkSetUri = "http://localhost:8080/oauth2/jwks"; 
        return NimbusJwtDecoder.withJwkSetUri(jwkSetUri).build();
    }
}
