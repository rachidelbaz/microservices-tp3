package org.sid.inventaireservice;

import org.sid.inventaireservice.entities.Product;
import org.sid.inventaireservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.List;

@SpringBootApplication
public class InventaireServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventaireServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ProductRepository  productRepository, RepositoryRestConfiguration restConfiguration){
    return args -> {
        restConfiguration.exposeIdsFor(Product.class);
        productRepository.saveAll(

                List.of(
                        Product.builder().name("Computer").quantity(12).price(1200).build(),
                        Product.builder().name("Printer").quantity(2).price(12000).build(),
                        Product.builder().name("Smartphone").quantity(22).price(12200).build()
                )
        );
    };
    }


}
