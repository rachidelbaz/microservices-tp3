package org.sid.costumerservice.repository;

import org.sid.costumerservice.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

@RepositoryRestController
public interface CustomerReposiroty extends JpaRepository<Customer,Long> {
}
