package org.seattlevoluntech.models;

import java.util.Date;

public class Error {
    private Date timestamp;
    private String message;
    private String details;

    public Error(Date timestamp, String message, String details) {
        super();
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
    }
}
