package com.horizon.service;

import com.horizon.model.Notification;
import com.horizon.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    public Optional<Notification> markAsRead(int id) {
        Optional<Notification> notification = notificationRepository.findById(id);
        if (notification.isPresent()) {
            Notification notif = notification.get();
            notif.setProdStatus("read");
            notificationRepository.save(notif);
        }
        return notification;
    }

    public void markAllAsRead() {
        List<Notification> notifications = notificationRepository.findAll();
        for (Notification notification : notifications) {
            notification.setProdStatus("read");
        }
        notificationRepository.saveAll(notifications);
    }
}