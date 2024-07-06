package org.sid.billingservice.repository;

import org.sid.billingservice.entities.Bill;
import org.sid.billingservice.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.data.rest.core.config.Projection;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RepositoryRestController
public interface BillRepository extends JpaRepository<Bill,Long> {
    @RestResource(path = "/buCustomerId")
    List<Bill> findByCustomerId(@Param("customerId") Long customerId);



}
