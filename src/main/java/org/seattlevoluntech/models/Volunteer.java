package org.seattlevoluntech.models;

import java.util.ArrayList;
import java.util.List;

public class Volunteer {
        public String firstName;
        public String lastName;
        public String email;
        public String bio;
        public List<Project> openProjects;
        public List<Project> completedProjects;
        public List<String> skills;

        public Volunteer(String fname, String lname, String email){
            this.firstName = fname;
            this.lastName = lname;
            this.email = email;
            this.openProjects = new ArrayList<Project>();
            this.completedProjects = new ArrayList<Project>();
            this.skills = new ArrayList<String>();
        }

        public void setFirstName(String firstName){
            this.firstName = firstName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public void setEmail(String email) {
            this.email = email;
        }
        public void setBio(String bio) {
            this.bio = bio;
        }
        public void addSkill (String skill) {
            this.skills.add(skill);
        }

        public void addOpenProject (Project project) {
            this.openProjects.add(project);
        }

        public void addCompletedProject (Project project) {
            this.completedProjects.add(project);
        }

        public String getFirstName(){
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public String getEmail() {
            return email;
        }

        public String getBio() {
            return bio;
        }

        public List<Project> getOpenProjects() {
            return openProjects;
        }

        public List<Project> getCompletedProjects() {
            return completedProjects;
        }

        public List<String> getSkills() {
            return skills;
        }
    }
