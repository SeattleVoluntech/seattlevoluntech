package org.seattlevoluntech.storage;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="users")
public class User implements Serializable {

  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private long id;

  @Column(name = "token_id")
  private String tokenId;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "email")
  private String email;

  @Column(name = "phone_number")
  private String phoneNumber;

  private String status;

  private String bio;

  @ManyToMany
  @JoinTable(
          name = "user_project",
          joinColumns = { @JoinColumn(name = "user_id")},
          inverseJoinColumns = { @JoinColumn(name = "project_id")}
  )
  private List<Project> projects;

  @CreationTimestamp
  private Date created;

  @UpdateTimestamp
  private Date updated;

  public User() {}

  public long getId() {
    return id;
  }

  public String getTokenId() { return tokenId; }

  public void setId(long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() { return email; }

  public void setEmail(String email) { this.email = email; }

  public void addProject(Project project) {
    if (!this.projects.contains(project))
    {
      projects.add(project);
    }
  }
  @JsonIgnore
  public List<Project> getProjects() {
    return projects;
  }
}
