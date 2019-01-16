package org.seattlevoluntech.controllers;

import com.google.common.collect.Lists;
import org.seattlevoluntech.models.Project;
import org.seattlevoluntech.storage.ProjectsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class ProjectController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ProjectsRepository projectsRepository;

    // List projects, specifying optional status parameters
    @GetMapping(path = "/projects")
    public List<Project> projects(@RequestParam("status") Optional<String> status, final HttpServletRequest request) {
        logger.info(request.getPathInfo());
        logger.info(request.getRemoteUser());

        status.ifPresent(projectStatus -> logger.info(projectStatus));

        if(status.isPresent()) {
            return projectsRepository.findProjectByStatus(status.get());
        }

        return Lists.newArrayList(projectsRepository.findAll());
    }

    // Create project
    @PostMapping(path="/projects")
    public Project createProject(@RequestBody Project project){
        return projectsRepository.save(project);
    }
    
}
