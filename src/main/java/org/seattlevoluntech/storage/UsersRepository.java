package org.seattlevoluntech.storage;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UsersRepository extends CrudRepository<User, Long> {
  List<User> findByLastName(String lastName);
  User findByTokenId(String tokenId);
}
