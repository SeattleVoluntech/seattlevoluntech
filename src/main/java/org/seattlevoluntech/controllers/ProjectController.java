package org.seattlevoluntech.controllers;

import com.google.common.collect.Lists;
import org.seattlevoluntech.storage.Project;
import org.seattlevoluntech.storage.*;
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
    @Autowired
    private UsersRepository usersRepository;

    // Create project
    @PostMapping(path="/projects")
    public Project createProject(@RequestBody Project project){
        return projectsRepository.save(project);
    }

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

    // List latest projects
    @GetMapping(path = "/projects/latest")
    public List<Project> latestProjects(@RequestParam("status") Optional<String> status, final HttpServletRequest request) {

        Integer DEFAULT_NUMBER_OF_LATEST_PROJECTS = 3;
        String DEFAULT_PROJECT_STATUS_STRING = "open";

        logger.info(request.getPathInfo());
        logger.info(request.getRemoteUser());

        logger.info("Request for latest {} projects", DEFAULT_NUMBER_OF_LATEST_PROJECTS);

        return projectsRepository.getLatestProjects(status.orElse(DEFAULT_PROJECT_STATUS_STRING), DEFAULT_NUMBER_OF_LATEST_PROJECTS);

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

    // Update project
    @PutMapping(path="/projects/link/{projectId}/{userId}")
    @ResponseBody
    public Optional<Project> linkUserWithProject(
            @PathVariable("projectId") Long projectId,
            @PathVariable("userId") Long userId
    ) {
        Optional<Project> optionalProject = projectsRepository.findById(projectId);

        if(!optionalProject.isPresent())
        {
            throw new ErrorController.ErrorNotFound("projectId-" + projectId);
        }

        Optional<User> optionalUser = usersRepository.findById(userId);

        if (!optionalUser.isPresent())
        {
            throw new ErrorController.ErrorNotFound("userId-" + userId);
        }


        optionalProject.get().addUsers(optionalUser.get());
        optionalUser.get().addProject(optionalProject.get());

        projectsRepository.save(optionalProject.get());
        usersRepository.save(optionalUser.get());

        return projectsRepository.findById(projectId);
    }

    // Update project
    @GetMapping(path="/projects/listUsers/{projectId}")
    @ResponseBody
    public List<User> listUsersOnProject(
            @PathVariable("projectId") Long projectId
    ) {
        Optional<Project> optionalProject = projectsRepository.findById(projectId);

        if(!optionalProject.isPresent())
        {
            throw new ErrorController.ErrorNotFound("projectId-" + projectId);
        }

        return projectsRepository.findById(projectId).get().getUsers();
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
