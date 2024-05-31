package com.horizon.model;
import jakarta.persistence.*;

@Entity
@Table(name = "subcategories")
public class SubCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subcategory_generator")
    @SequenceGenerator(name="subcategory_generator", sequenceName = "subcategory_seq", allocationSize=1)
    private Long id;
    private String name;

    @ManyToOne
    private Category category;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
