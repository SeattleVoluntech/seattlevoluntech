package org.seattlevoluntech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SeattlevoluntechApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeattlevoluntechApplication.class, args);

		System.out.println("http://localhost:8080");
	}
}