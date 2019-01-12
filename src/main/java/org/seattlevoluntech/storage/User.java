package org.seattlevoluntech.storage;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="users")
public class User implements Serializable {

  @Id
  private long id;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;


  private String email;

  @Column(name = "phone_number")
  private String phoneNumber;

  private String status;

  private String bio;

  @CreationTimestamp
  private Date created;

  @UpdateTimestamp
  private Date updated;

//  @PrePersist
//  protected void onCreate() {
//    created = new Date();
//  }
//
//  @PreUpdate
//  protected void onUpdate() {
//    updated = new Date();
//  }


  public User() { }

  public User(
    long id,
    String firstName,
    String lastName
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }


  public long getId() {
    return id;
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
}
