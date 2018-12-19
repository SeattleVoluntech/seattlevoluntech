package org.seattlevoluntech.controllers;

import org.seattlevoluntech.models.Project;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HomeController {
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/projects")
    public List<Project> projects() {
        Project blah = new Project("Richard's Project");
        return Arrays.asList(blah);
    }
}
