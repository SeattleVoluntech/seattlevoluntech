package org.seattlevoluntech.storage;

import org.seattlevoluntech.models.Project;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface ProjectsRepository extends CrudRepository<Project, Long> {

    @Query("SELECT p FROM Project AS p WHERE p.status = :status")
    List<Project> findProjectByStatus(@Param("status") String status);

}
