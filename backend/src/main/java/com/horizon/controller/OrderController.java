////package com.horizon.admin.controller;
////
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.http.HttpStatus;
////import org.springframework.http.ResponseEntity;
////import org.springframework.web.bind.annotation.*;
////
////import com.horizon.admin.model.Order;
////import com.horizon.admin.service.OrderService;
////
////import java.util.List;
////import java.util.Optional;
////
////@RestController
////@CrossOrigin
////@RequestMapping("/orders")
////public class OrderController {
////
////    @Autowired
////    private OrderService orderService;
////
////    @GetMapping
////    public ResponseEntity<List<Order>> getAllOrders() {
////        List<Order> orders = orderService.getAllOrders();
////        if (orders.isEmpty()) {
////            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
////        }
////        return new ResponseEntity<>(orders, HttpStatus.OK);
////    }
////
////    @GetMapping("/{id}")
////    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
////        Optional<Order> order = orderService.getOrderById(id);
////        if (order.isPresent()) {
////            return new ResponseEntity<>(order.get(), HttpStatus.OK);
////        }
////        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////    }
////}
////
//package com;
//
//
