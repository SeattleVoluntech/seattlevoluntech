package org.seattlevoluntech.Utilities;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import lombok.RequiredArgsConstructor;
import org.seattlevoluntech.models.Email;

@RequiredArgsConstructor
public class EmailUtility {
    private final String DOMAIN;
    private final String API_KEY;

    public JsonNode SendSimpleMessage(Email email) throws UnirestException {
        HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + DOMAIN + "/messages")
                .basicAuth("api", API_KEY)
                .field("from", email.getFrom())
                .field("to", email.getTo())
                .field("subject", email.getSubject())
                .field("text", email.getMessage())
                .asJson();
        return request.getBody();
    }
}
