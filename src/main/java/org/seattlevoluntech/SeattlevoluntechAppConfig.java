package org.seattlevoluntech;

import org.seattlevoluntech.Utilities.EmailUtility;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SeattlevoluntechAppConfig {

    // Bean configuration for Mail Sender

    /**
     * Domain for mailgun mail sender api
     */
    @Value(value = "${mailgun.domain}")
    private String mailgunDomain;

    /**
     * API key required to send emails through mailgun
     */
    @Value(value = "${mailgun.api.key}")
    private String mailgunApiKey;

    @Bean
    public EmailUtility emailUtility() {
        return new EmailUtility(mailgunDomain, mailgunApiKey);
    }
}
