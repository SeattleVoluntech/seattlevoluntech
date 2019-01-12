package org.seattlevoluntech.storage;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UsersRepository extends CrudRepository<User, Long> {
  List<User> findByLastName(String lastName);
}
