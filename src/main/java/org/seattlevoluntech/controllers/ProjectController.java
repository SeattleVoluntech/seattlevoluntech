package org.seattlevoluntech.controllers;

import com.google.common.collect.Lists;
import org.seattlevoluntech.models.Project;
import org.seattlevoluntech.storage.ProjectsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class ProjectController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ProjectsRepository projectsRepository;

    @RequestMapping(value = "/projects")
    public List<Project> projects(final HttpServletRequest request) {
        logger.info(request.getRemoteUser());

        return Lists.newArrayList(projectsRepository.findAll());
    }
}
