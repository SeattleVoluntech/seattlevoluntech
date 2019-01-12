package org.seattlevoluntech.controllers;


import com.google.common.collect.Lists;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.seattlevoluntech.storage.Skills;
import org.seattlevoluntech.storage.SkillsRepository;
import java.util.List;
import java.util.ArrayList;

@RestController
public class SkillsController {

    @Autowired
    private SkillsRepository skillsRepository;


    @RequestMapping(method = RequestMethod.GET, path = "/skill")
    public List<Skills> getRemoteUser(HttpServletRequest request) {
        return Lists.newArrayList(skillsRepository.findAll());
    }


}


