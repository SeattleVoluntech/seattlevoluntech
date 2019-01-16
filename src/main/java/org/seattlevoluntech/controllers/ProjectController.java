package org.seattlevoluntech.controllers;

import com.google.common.collect.Lists;
import org.seattlevoluntech.models.Project;
import org.seattlevoluntech.storage.ProjectsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
public class ProjectController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ProjectsRepository projectsRepository;

    // Create project
    @PostMapping(path="/projects")
    public Project createProject(@RequestBody Project project){
        return projectsRepository.save(project);
    }

    // View all projects
    @GetMapping(path="/projects")
    public List<Project> projects(final HttpServletRequest request) {
        logger.info(request.getPathInfo());
        logger.info(request.getRemoteUser());

        return Lists.newArrayList(projectsRepository.findAll());
    }

    // View individual project by ID
    @GetMapping(path="projects/{id}")
    @ResponseBody
    public Optional<Project> viewOneProject(@PathVariable("id") Long id) {
        if(!projectsRepository.findById(id).isPresent())
            throw new ErrorController.ErrorNotFound("id-" + id);

        return projectsRepository.findById(id);
    }

    // Update project
    @PutMapping(path="/projects/{id}")
    @ResponseBody
    public Optional<Project> updateProject(
            @RequestBody Project project,
            @PathVariable("id") Long id
        ) {

        if(!projectsRepository.findById(id).isPresent())
            throw new ErrorController.ErrorNotFound("id-" + id);

        project.setId(id);

        projectsRepository.save(project);

        return projectsRepository.findById(id);
    }

    // Delete project
    @DeleteMapping(path="projects/{id}")
    @ResponseBody
    public List<Project> deleteProject(@PathVariable("id") Long id) {
        if(!projectsRepository.findById(id).isPresent())
            throw new ErrorController.ErrorNotFound("id-" + id);

        projectsRepository.deleteById(id);
        return Lists.newArrayList(projectsRepository.findAll());
    }

}
