package org.seattlevoluntech.controllers;

import com.auth0.AuthenticationController;
import com.auth0.IdentityVerificationException;
import com.auth0.Tokens;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.seattlevoluntech.security.TokenAuthentication;
import com.auth0.jwt.JWT;
import org.seattlevoluntech.storage.User;
import org.seattlevoluntech.storage.UsersRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

import static java.util.Objects.isNull;

@SuppressWarnings("unused")
@Controller
public class CallbackController {

    @Value(value = "${com.auth0.domain}")
    private String domain;

    @Value(value = "${com.auth0.clientId}")
    private String clientId;

    @Autowired
    private AuthenticationController controller;
    @Autowired
    private UsersRepository userRepository;

    private final String redirectOnFail;
    private final String redirectOnSuccess;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public CallbackController() {
        this.redirectOnFail = "/login";
        this.redirectOnSuccess = "/portal/home";
    }

    @RequestMapping(value = "/callback", method = RequestMethod.GET)
    protected void getCallback(final HttpServletRequest req, final HttpServletResponse res) throws ServletException, IOException {
        logger.info("/callback GET called");
        handle(req, res);
    }

    @RequestMapping(value = "/callback", method = RequestMethod.POST, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    protected void postCallback(final HttpServletRequest req, final HttpServletResponse res) throws ServletException, IOException {
        logger.info("/callback POST called");
        logger.info(req.toString());
        handle(req, res);
    }

    private void handle(HttpServletRequest req, HttpServletResponse res) throws IOException {
        try {
            Tokens tokens = controller.handle(req);
            TokenAuthentication tokenAuth = new TokenAuthentication(JWT.decode(tokens.getIdToken()));
            SecurityContextHolder.getContext().setAuthentication(tokenAuth);

            if (!isUserInDatabase(req.getRemoteUser())) {
                logger.info("Remote user: {} not found, adding new User to database");
                String accessToken = tokens.getAccessToken();
                updateUserTableWithNewUserProfile(accessToken);
            }

            res.sendRedirect(redirectOnSuccess);
        } catch (AuthenticationException | IdentityVerificationException e) {
            e.printStackTrace();
            SecurityContextHolder.clearContext();
            res.sendRedirect(redirectOnFail);
        }
    }

    private void updateUserTableWithNewUserProfile(String accessToken) {
        // Retrieve user profile information from Auth0
        String userAuth0ProfileURL = "https://" + this.domain + "/userinfo";

        HttpHeaders userAuth0ProfileRequestHeaders = new HttpHeaders();
        userAuth0ProfileRequestHeaders.setContentType(MediaType.APPLICATION_JSON);
        userAuth0ProfileRequestHeaders.set("authorization","Bearer " + accessToken);

        RestTemplate restTemplate = new RestTemplate();

        HttpEntity<String> userAuth0ProfileEntity = new HttpEntity<String>("", userAuth0ProfileRequestHeaders);
        ResponseEntity<String> getAuth0ProfileResponse = restTemplate.exchange(userAuth0ProfileURL, HttpMethod.GET, userAuth0ProfileEntity, String.class);
        logger.info("GET to {} to retrieve Auth0 profile", userAuth0ProfileURL);

        logger.info("GET Response HTTP code: {}", getAuth0ProfileResponse.getStatusCode());
        logger.info("GET Response Payload: {}", getAuth0ProfileResponse.getBody().toString());

        ObjectMapper mapper = new ObjectMapper();

        try {
            JsonNode userAuth0Profile = mapper.readTree(getAuth0ProfileResponse.getBody());

            User newUser = new User();
            newUser.setFirstName(userAuth0Profile.get("name").asText());
            newUser.setTokenId(userAuth0Profile.get("sub").asText());
            newUser.setEmail(userAuth0Profile.get("email").asText());
            userRepository.save(newUser);

        } catch (Exception e) {
            logger.error("Auth0 user profile fetch / parse error");
        }

    }

    private boolean isUserInDatabase(String userTokenId) {
        return !isNull(userRepository.findByTokenId(userTokenId));
    }

}
