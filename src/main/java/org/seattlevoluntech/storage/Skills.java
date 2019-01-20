package org.seattlevoluntech.storage;

import javax.persistence.*;

@Entity
@Table(name="skills")
public class Skills {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    @Column(name = "skill_name")
    private String skillName;

    @Column(name = "description")
    private String description;

    protected Skills() {}

    public Skills(String skillName, String description) {
        this.skillName = skillName;
        this.description = description;
    }

    public String getName (){
        return this.skillName;
    }

    public String getDescription(){
        return this.description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    @Override
    public String toString() {
        return String.format(
                "Skill[id=%d, skill name='%s', description='%s']",
                id, skillName, description);
    }
}
