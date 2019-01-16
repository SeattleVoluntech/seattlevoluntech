package org.seattlevoluntech.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("unused")
@Controller
public class ErrorController{

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @ResponseStatus(HttpStatus.NOT_FOUND)
    public static class ErrorNotFound extends RuntimeException {
        public ErrorNotFound(String exception) {
            super(exception);
        }
    }

}