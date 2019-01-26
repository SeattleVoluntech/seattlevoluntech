package org.seattlevoluntech.storage;

import org.seattlevoluntech.models.Project;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ProjectsRepository extends CrudRepository<Project, Long> {

    @Query("SELECT p FROM Project AS p WHERE p.status = :status")
    List<Project> findProjectByStatus(@Param("status") String status);

    @Query(value = "SELECT * FROM Project AS p " +
            "WHERE p.status = :status " +
            "ORDER BY creation_date " +
            "DESC LIMIT :numberOfProjectsToDisplay", nativeQuery = true)
    List<Project> getLatestProjects(@Param("status") String status,
                                    @Param("numberOfProjectsToDisplay") Integer numberOfProjectsToDisplay);



}
