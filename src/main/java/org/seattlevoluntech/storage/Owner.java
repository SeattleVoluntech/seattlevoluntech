package org.seattlevoluntech.storage;

import org.seattlevoluntech.models.Project;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="owners")
public class Owner implements Serializable {

    public Owner (
        long id
    ) {
        this.id = id;
    }

    @Id
    private long id;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    @OneToOne
    @JoinColumn(name="project_id")
    private Project project;

    private Owner () {}

    private Owner (User user, Project project) {
        this.user = user;
        this.project = project;

        // dummy change
    }
}
