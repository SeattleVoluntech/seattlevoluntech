package org.seattlevoluntech.controllers;

import org.seattlevoluntech.storage.User;
import org.seattlevoluntech.storage.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired UserRepository userRepository;
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @RequestMapping("/findByLastName")
    public String fetchDataByLastName(@RequestParam("last_name") String lastName){

        logger.info("Finding items by last name");
        StringBuilder result = new StringBuilder();

        for(User user: userRepository.findByLastName(lastName)){
            result.append(user.getFirstName());
            result.append(" ");
            result.append(user.getLastName());
            result.append("\n");
        }

        return result.toString();
    }
}
