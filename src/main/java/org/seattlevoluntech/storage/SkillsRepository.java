package org.seattlevoluntech.storage;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SkillsRepository extends CrudRepository<Skills, Long> {

    List<Skills> findBySkillName(String skillName);

}
