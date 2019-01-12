package org.seattlevoluntech.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    @RequestMapping(method = RequestMethod.GET, path = "/user")
    public User getRemoteUser(HttpServletRequest request) {
        return new User(request.getRemoteUser());
    }

    public static class User {
        public String username;

        public User(String username) {
            this.username = username;
        }
    }
}
