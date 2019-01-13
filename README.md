# Seattle VolunTech
[![Build Status](https://travis-ci.org/SeattleVoluntech/seattlevoluntech.svg?branch=master)](https://travis-ci.org/SeattleVoluntech/seattlevoluntech)
Seattle VolunTech is a platform that connects minority- and immigrant-owned  small businesses with technical resources necessary to improve web presence and brand awareness in the Seattle area.

Seattle VolunTech one of three projects resulting from the efforts of the [WTIA ION Collaborators - Cohort 3](https://www.washingtontechnology.org/ion/) developed and maintained in concert with [Codefellows](https://www.codefellows.org) code school in Seattle.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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
