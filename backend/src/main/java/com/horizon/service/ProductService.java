package com.horizon.service;

import com.horizon.repository.BeautyRepository;
import com.horizon.repository.ElectronicRepository;
import com.horizon.repository.FurnitureRepository;
import com.horizon.repository.ProductRepository;
import com.horizon.repository.NotificationRepository;
import com.horizon.model.Notification;
import com.horizon.model.Beauty;
import com.horizon.model.Electronic;
import com.horizon.model.Furniture;
import com.horizon.model.Product;
import com.horizon.model.Seller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private ElectronicRepository electronicRepo;

    @Autowired
    private BeautyRepository beautyRepo;

    @Autowired
    private FurnitureRepository furnitureRepo;

    // Create or update a product
    public Product saveProduct(Product product) {
        return productRepo.save(product);
    }
    public Product s(Product product) {
    	return productRepo.save(product);
    }

    public Electronic saveElectronic(Electronic electronic) {
        return electronicRepo.save(electronic);
    }

    public Beauty saveBeauty(Beauty beauty) {
        return beautyRepo.save(beauty);
    }

    public Furniture saveFurniture(Furniture furniture) {
        return furnitureRepo.save(furniture);
    }
    
    public void createNotification(Product product) {
        String message = "Supplier Id "+product.getSupplierId()+" request to add the "+product.getProductTitle();
        Notification notification = new Notification(product.getSupplierId(), message, "pending");
        notificationRepo.save(notification);
    }


    // Get product by ID
    public Optional<Product> getProductById(int productId) {
        return productRepo.findById(productId);
    }

    public Optional<Electronic> getElectronicById(int productId) {
        return electronicRepo.findById(productId);
    }

    public Optional<Beauty> getBeautyById(int productId) {
        return beautyRepo.findById(productId);
    }

    public Optional<Furniture> getFurnitureById(int productId) {
        return furnitureRepo.findById(productId);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public List<Electronic> getAllElectronics() {
        return electronicRepo.findAll();
    }

    public List<Beauty> getAllBeauty() {
        return beautyRepo.findAll();
    }

    public List<Furniture> getAllFurniture() {
        return furnitureRepo.findAll();
    }

    // Delete product by ID
    public void deleteProduct(int productId) {
        productRepo.deleteById(productId);
    }

    public void deleteElectronic(int productId) {
        electronicRepo.deleteById(productId);
    }

    public void deleteBeauty(int productId) {
        beautyRepo.deleteById(productId);
    }

    public void deleteFurniture(int productId) {
        furnitureRepo.deleteById(productId);
    }
    public Product approveProduct(int id) {
        Product product = productRepo.findById(id).orElse(null);
        if (product != null) {
        	product.setDecession("Approved");
            return productRepo.save(product);
        }
        return null;
    }
    public Product rejectProduct(int id) {
        Product product = productRepo.findById(id).orElse(null);
        if (product != null) {
        	product.setDecession("Rejected");
            return productRepo.save(product);
        }
        return null;
    }
    public List<Product> getAllApprovedProducts() {
        return productRepo.findByDecession("pending");
    }
}
