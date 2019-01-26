package org.seattlevoluntech.storage;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

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
    String bio
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.status = status;
    this.bio = bio;
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

  private String email;

  @Column(name = "phone_number")
  private String phoneNumber;

  private String status;

  private String bio;

  @CreationTimestamp
  private Date created;

  @UpdateTimestamp
  private Date updated;

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

  public String getEmail() { return this.email; }

  public void setEmail(String email) { this.email = email; }
}
