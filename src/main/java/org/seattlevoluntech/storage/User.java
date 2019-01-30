package org.seattlevoluntech.storage;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="users")
public class User implements Serializable {

  public User(
    long id,
    String firstName,
    String lastName,
    String email,
    String phoneNumber,
    String status,
    String bio,
    String type
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.status = status;
    this.bio = bio;
    this.type = type;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column(name = "token_id")
  private String tokenId;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name= "email")
  private String email;

  @Column(name = "phone_number")
  private String phoneNumber;

  @Column(name = "status")
  private String status;

  @Column(name = "bio")
  private String bio;

  @ManyToMany
  @JoinTable(
          name = "volunteers",
          joinColumns = {@JoinColumn(name = "user_id")},
          inverseJoinColumns = { @JoinColumn(name = "project_id")}
  )
  private List<Project> projects;

  @Column(name = "type")
  private String type;

  @CreationTimestamp
  private Date created;

  @UpdateTimestamp
  private Date updated;

  @Version
  @Column(name = "opt_lock")
  private Integer lock;

  public User() {}

  public long getId() {
    return id;
  }

  public String getTokenId() {
    return tokenId;
  }

  public void setTokenId(String tokenId) {
    this.tokenId = tokenId;
  }

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

  @JsonIgnoreProperties("users")
  public List<Project> getProjects() {
    return this.projects;
  }

  public String getPhoneNumber() { return phoneNumber; }

  public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

  public String getStatus() { return status; }

  public void setStatus(String status) { this.status = status; }

  public String getBio() { return bio; }

  public void setBio(String bio) { this.bio = bio; }

  public String getType() { return type; }

  public void setType(String type) { this.type = type; }

}
