package org.seattlevoluntech.controllers;

import org.seattlevoluntech.models.Project;
import org.seattlevoluntech.models.Volunteer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import javax.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    @RequestMapping(method = RequestMethod.GET, path = "/user")
    public Volunteer getRemoteUser(HttpServletRequest request) {
        Volunteer sample = new Volunteer("Bob", "Jones", "bobjones@gmail.com");
        sample.addCompletedProject(new Project("Seattle Transportation App"));
        sample.addOpenProject(new Project("Seattle Voluntech"));
        sample.addSkill("Javascript");
        sample.addSkill("C++");
        return sample;
    }


}
