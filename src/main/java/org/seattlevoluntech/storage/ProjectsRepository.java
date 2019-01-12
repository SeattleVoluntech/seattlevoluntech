package org.seattlevoluntech.storage;

import org.seattlevoluntech.models.Project;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ProjectsRepository extends CrudRepository<Project, Long> {


}
