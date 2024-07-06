package org.sid.costumerservice;

import org.sid.costumerservice.entities.Customer;
import org.sid.costumerservice.repository.CustomerReposiroty;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.List;

@SpringBootApplication
public class CostumerServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CostumerServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(CustomerReposiroty customerReposiroty, RepositoryRestConfiguration repositoryRestConfiguration){
        return args -> {
            repositoryRestConfiguration.exposeIdsFor(Customer.class);
            customerReposiroty.saveAll(
                    List.of(
                            Customer.builder().name("Hassan").email("hassan@gmail.com").build(),
                            Customer.builder().name("Hanane").email("hanane@gmail.com").build(),
                            Customer.builder().name("Imane").email("imane@gmail.com").build()

                    )
            );
            customerReposiroty.findAll().forEach(c->{
                System.out.println(c);
                    }

            );
        };
    }

}
