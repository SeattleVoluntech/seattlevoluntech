package org.seattlevoluntech.controllers;

import com.auth0.AuthenticationController;
import org.seattlevoluntech.security.AppConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@SuppressWarnings("unused")
@Controller
public class LoginController {

    @Autowired
    private AuthenticationController controller;
    @Autowired
    private AppConfig appConfig;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    protected String login(final HttpServletRequest req) {
        logger.debug("Performing login");
        String redirectUri = req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort() + "/callback";
        String authorizeUrl = controller.buildAuthorizeUrl(req, redirectUri)
                .withAudience(String.format("https://%s/userinfo", appConfig.getDomain()))
                .withScope("openid profile email")
                .build();

        return "redirect:" + authorizeUrl;
    }

}
