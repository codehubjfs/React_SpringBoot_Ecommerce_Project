package com.horizon.model;

import jakarta.persistence.*;

@Entity
@Table(name = "notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "notific_seq")
    @SequenceGenerator(name = "notific_seq", sequenceName = "NOTIFICATION_SEQ", allocationSize = 1)
    private int id;
    private int sellerId;
    private String message;
    private String prod_Status;

    public Notification() {
    }

    public Notification(int sellerId, String message, String prod_Status) {
        this.sellerId = sellerId;
        this.message = message;
        this.prod_Status = prod_Status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSellerId() {
        return sellerId;
    }

    public void setSellerId(int sellerId) {
        this.sellerId = sellerId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getProdStatus() {
        return prod_Status;
    }

    public void setProdStatus(String prod_Status) {
        this.prod_Status = prod_Status;
    }
}
