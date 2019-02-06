package org.seattlevoluntech.storage;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity(name = "projects")
@Table(name="projects")
public class Project implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @Column(name = "owner_id")
    private String ownerId;
    @Column(name = "project_name")
    private String projectName;
    @Column(name = "project_description")
    private String projectDescription;
    @Column(name = "business_name")
    private String businessName;
    @Column(name = "business_description")
    private String businessDescription;
    @CreationTimestamp
    @Column(name = "creation_date")
    private Date creationDate;
    @Column(name = "status")
    private String status;
    @ManyToMany(mappedBy = "projects")
    private List<User> userList;
    @Version
    @Column(name="opt_lock")
    private Integer lock;

    public Long getId() {
        return id;
    }

    public void setId(Long id) { this.id = id; }

    public String getOwnerId() { return ownerId; }

    public void setOwnerId(String ownerId) { this.ownerId = ownerId; }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getBusinessDescription() {
        return businessDescription;
    }

    public void setBusinessDescription(String businessDescription) {
        this.businessDescription = businessDescription;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }

    public void addUsers(User user)
    {
        if (!this.userList.contains(user))
        {
            this.userList.add(user);
        }
    }

    @JsonIgnoreProperties("projects")
    public List<User> getUsers()
    {
        return this.userList;
    }
}
