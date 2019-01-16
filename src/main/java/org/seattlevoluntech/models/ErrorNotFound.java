package org.seattlevoluntech.models;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ErrorNotFound extends RuntimeException {
    public ErrorNotFound(String exception) {
        super(exception);
    }
}