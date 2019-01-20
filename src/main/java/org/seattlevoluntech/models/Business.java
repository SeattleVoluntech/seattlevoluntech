package org.seattlevoluntech.models;

public class Business {
    private String businessName;
    private String businessDescription;
    private String businessEmail;

    public Business (String businessName, String businessEmail, String businessDescription) {
        this.businessName = businessName; // visible name
        this.businessEmail = businessEmail; // login / handle
        this.businessDescription = businessDescription; // who we are as a business

    }
}