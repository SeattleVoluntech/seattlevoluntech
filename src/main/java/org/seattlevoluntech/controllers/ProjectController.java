package org.seattlevoluntech.controllers;

import org.seattlevoluntech.models.Project;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;

@RestController
public class ProjectController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @RequestMapping(value = "/projects")
    public List<Project> projects(final HttpServletRequest request) {
        logger.info(request.getRemoteUser());
        Project blah = new Project("Richard's Project");
        return Arrays.asList(blah);
    }
}
