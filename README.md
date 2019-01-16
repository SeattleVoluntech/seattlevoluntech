# Seattle VolunTech
[![Build Status](https://travis-ci.org/SeattleVoluntech/seattlevoluntech.svg?branch=master)](https://travis-ci.org/SeattleVoluntech/seattlevoluntech)
Seattle VolunTech is a platform that connects minority- and immigrant-owned  small businesses with technical resources necessary to improve web presence and brand awareness in the Seattle area.

Seattle VolunTech one of three projects resulting from the efforts of the [WTIA ION Collaborators - Cohort 3](https://www.washingtontechnology.org/ion/) developed and maintained in concert with [Codefellows](https://www.codefellows.org) code school in Seattle.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### IntelliJ Project Setup ###
#### Optimizing Imports ####
1. In your project's file tree view, right click on the "seattlevoluntech", then "Optimize Imports"


#### Datasource Configuration ####
1. In your project's file tree view, navigate and open ```src/main/resources/application.properties```
2. Add the following configurations values, fill in the username and password configured for your database <>

```
spring.datasource.username=<postgres_db_user_name>
spring.datasource.password=<postgres_db_password>
```

#### Project Environmental Variables Configuration ####
1. Ask the Project Administrator about the "auth0.client-secret" secret value
2. In the IntelliJ application menu bar, navigate to the "Run" -> "Edit Configuration"
3. On the "Environment Variables" line, click on the "..." button
4. Click the "+" icon to add a new environment variable
5. Populate "name" with "auth0.client-secret"
6. Populate the "value" with the secret value provided by the Project Administrator 

#### Running the Application Server ####
1. In your project's file tree view, navigate and open ```src/main/java/org.seattlevoluntech/SeattlvoluntechApplication.java```
2. In the IntelliJ application menu bar, click on "Run" -> "Run"
3. If the build is successful, the terminal will shows the server's local URL, eg. ```http://localhost:8080```

## Built with
* [Spring](https://spring.io) - Framework
* [React](https://reactjs.org) - Frontend Library

## Setup backend with Windows machine
* Open Terminal in IntelliJ (this will run command line arguments so 
linux/mac commands won't work)
* Type   psql -Upostgres   (this assumes your username is the default, if not, put something
else after the -U so if it was "Seattle", it would be psql -USeattle)
* Type   create database voluntech   (you may change voluntech to some other database if needed)
* On the top next to the play button, click on the drop down and then "Edit configurations"
 Make sure it's on SeattlevoluntechApplication
* Click the arrow next to Environment
* Click the folder on the right of the box for "Environment variables"
* Click the '+' button
* Put     auth0.client-secret    for name and
          0v2hUD4ybblJBI4aGGKbdcygtArU60g-9a0CNRVRovjZ-LTQvaWLDheSPlQKwzA2 for value
          Click OK
* Run the program, it should show a website when you go to http://localhost:8080
... more to come ...
