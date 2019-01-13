//package org.seattlevoluntech.controllers;
//
//import org.seattlevoluntech.models.Business;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import javax.servlet.http.HttpServletRequest;
//
//@RestController
//public class BusinessController {
//
//        @RequestMapping(method = RequestMethod.GET, path = "/user")
//        public business getBusinessUser(HttpServletRequest request) {
//            return new Business(request.getRemoteUser());
//        }
//
//        public static class Business {
//            public String businessName;
//        }
//    }
//
//@RestController
//public class BusinessController {
//
//    @RequestMapping(method = RequestMethod.GET, path = "/user")
//    public User getRemoteUser(HttpServletRequest request) {
//        return new Business(request.getRemoteUser());
//    }
//
//    public static class Business {
//        public String userName;
//        public String businessName;
//        public String businessDescription;
//        public String businessEmail;
//
//        public Business(businessName, businessDescription, businessEmail) {
//            this.username = userName;
//            this.business = businessName;
//            this.
//        }
//    }
//}