package com.horizon.controller;

import com.horizon.model.Beauty;
import com.horizon.model.Electronic;
import com.horizon.model.Furniture;
import com.horizon.model.Product;
import com.horizon.model.Seller;
import com.horizon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/electronic")
    public ResponseEntity<?> createElectronicProduct(@RequestBody Electronic product) {
        product.setCategory("Electronic");
        product.setDateOfAddition(new Date());
        product.setDecession("pending");
        product.setStatus("active");
        productService.saveProduct(product);
        productService.saveElectronic(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/furniture")
    public ResponseEntity<?> createFurnitureProduct(@RequestBody Furniture product) {
        product.setCategory("Furniture");
        product.setDateOfAddition(new Date());
        product.setDecession("pending");
        product.setStatus("active");
        productService.saveProduct(product);
        productService.saveFurniture(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping("/beauty")
    public ResponseEntity<?> createBeautyProduct(@RequestBody Beauty product) {
        product.setCategory("Beauty");
        product.setDateOfAddition(new Date());
        product.setDecession("pending");
        product.setStatus("active");
        productService.saveProduct(product);
        productService.saveBeauty(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PutMapping("/beauty/{id}")
    public ResponseEntity<?> updateBeautyProduct(@PathVariable int id, @RequestBody Beauty product) {
        Optional<Beauty> existingProductOpt = productService.getBeautyById(id);
        if (!existingProductOpt.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Beauty existingProduct = existingProductOpt.get();
        existingProduct.setBrand(product.getBrand());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setItemWeight(product.getItemWeight());
        existingProduct.setMainImage(product.getMainImage());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setProductBenefit(product.getProductBenefit());
        existingProduct.setProductTitle(product.getProductTitle());
        existingProduct.setSkinType(product.getSkinType());
        existingProduct.setStock(product.getStock());
        existingProduct.setThumbnail1(product.getThumbnail1());
        existingProduct.setThumbnail2(product.getThumbnail2());
        existingProduct.setThumbnail3(product.getThumbnail3());
        existingProduct.setThumbnail4(product.getThumbnail4());
        existingProduct.setUsedFor(product.getUsedFor());
        existingProduct.setVideo(product.getVideo());
        productService.saveProduct(existingProduct);
        productService.saveBeauty(existingProduct);
        return new ResponseEntity<>(existingProduct, HttpStatus.OK);
    }

    @PutMapping("/furniture/{id}")
    public ResponseEntity<?> updateFurnitureProduct(@PathVariable int id, @RequestBody Furniture product) {
        Optional<Furniture> existingProductOpt = productService.getFurnitureById(id);
        if (!existingProductOpt.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Furniture existingProduct = existingProductOpt.get();
        existingProduct.setBrand(product.getBrand());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setMainImage(product.getMainImage());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setProductTitle(product.getProductTitle());
        existingProduct.setStock(product.getStock());
        existingProduct.setColor(product.getColor());
        existingProduct.setDimension(product.getDimension());
        existingProduct.setMaterial(product.getMaterial());
        existingProduct.setModel(product.getModel());
        existingProduct.setThumbnail1(product.getThumbnail1());
        existingProduct.setThumbnail2(product.getThumbnail2());
        existingProduct.setThumbnail3(product.getThumbnail3());
        existingProduct.setThumbnail4(product.getThumbnail4());
        existingProduct.setVideo(product.getVideo());
        productService.saveProduct(existingProduct);
        productService.saveFurniture(existingProduct);
        return new ResponseEntity<>(existingProduct, HttpStatus.OK);
    }

    @PutMapping("/electronic/{id}")
    public ResponseEntity<?> updateElectronicProduct(@PathVariable int id, @RequestBody Electronic product) {
        Optional<Electronic> existingProductOpt = productService.getElectronicById(id);
        if (!existingProductOpt.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Electronic existingProduct = existingProductOpt.get();
        existingProduct.setBrand(product.getBrand());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setMainImage(product.getMainImage());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setProductTitle(product.getProductTitle());
        existingProduct.setStock(product.getStock());
        existingProduct.setColor(product.getColor());
        existingProduct.setModel(product.getModel());
        existingProduct.setBattery(product.getBattery());
        existingProduct.setDisplaySize(product.getDisplaySize());
        existingProduct.setDisplayType(product.getDisplayType());
        existingProduct.setFrontCamera(product.getFrontCamera());
        existingProduct.setOperatingSystem(product.getOperatingSystem());
        existingProduct.setProcessor(product.getProcessor());
        existingProduct.setRam(product.getRam());
        existingProduct.setRearCamera(product.getRearCamera());
        existingProduct.setStorage(product.getStorage());
        existingProduct.setThumbnail1(product.getThumbnail1());
        existingProduct.setThumbnail2(product.getThumbnail2());
        existingProduct.setThumbnail3(product.getThumbnail3());
        existingProduct.setThumbnail4(product.getThumbnail4());
        existingProduct.setVideo(product.getVideo());
        productService.saveProduct(existingProduct);
        productService.saveElectronic(existingProduct);
        return new ResponseEntity<>(existingProduct, HttpStatus.OK);
    }

    @GetMapping("/{category}/{id}")
    public ResponseEntity<?> getProductById(@PathVariable String category, @PathVariable int id) {
        switch (category.toLowerCase()) {
            case "electronic":
                Optional<Electronic> electronic = productService.getElectronicById(id);
                return electronic.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
            case "beauty":
                Optional<Beauty> beauty = productService.getBeautyById(id);
                return beauty.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
            case "furniture":
                Optional<Furniture> furniture = productService.getFurnitureById(id);
                return furniture.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
            default:
                return ResponseEntity.badRequest().body("Invalid category");
        }
    }

    @GetMapping("/{category}")
    public ResponseEntity<?> getAllProducts(@PathVariable String category) {
        switch (category.toLowerCase()) {
            case "electronic":
                List<Electronic> electronics = productService.getAllElectronics();
                return ResponseEntity.ok(electronics);
            case "beauty":
                List<Beauty> beauties = productService.getAllBeauty();
                return ResponseEntity.ok(beauties);
            case "furniture":
                List<Furniture> furnitures = productService.getAllFurniture();
                return ResponseEntity.ok(furnitures);
            default:
                return ResponseEntity.badRequest().body("Invalid category");
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllProducts() {
        List<Product> products = new ArrayList<>();
        products.addAll(productService.getAllElectronics());
        products.addAll(productService.getAllBeauty());
        products.addAll(productService.getAllFurniture());
        products.removeIf(product -> product.getStatus().equalsIgnoreCase("inactive"));
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
    
    @GetMapping("/totalproducts")
    public ResponseEntity<?> getTotalProdcuts() {
        List<Product> products = new ArrayList<>();
        products.addAll(productService.getAllElectronics());
        products.addAll(productService.getAllBeauty());
        products.addAll(productService.getAllFurniture());
        products.removeIf(product -> product.getStatus().equalsIgnoreCase("inactive"));
        return new ResponseEntity<>(products.size(), HttpStatus.OK);
    }
    
    @GetMapping("/availableproducts")
    public ResponseEntity<?> getAvailableProdcuts() {
        List<Product> products = new ArrayList<>();
        products.addAll(productService.getAllElectronics());
        products.addAll(productService.getAllBeauty());
        products.addAll(productService.getAllFurniture());
        products.removeIf(product -> product.getStatus().equalsIgnoreCase("inactive"));
        products.removeIf(product -> product.getStock()==0);
        return new ResponseEntity<>(products.size(), HttpStatus.OK);
    }
    
    @GetMapping("/outofstockproducts")
    public ResponseEntity<?> getOutofStockProdcuts() {
        List<Product> products = new ArrayList<>();
        products.addAll(productService.getAllElectronics());
        products.addAll(productService.getAllBeauty());
        products.addAll(productService.getAllFurniture());
        products.removeIf(product -> product.getStatus().equalsIgnoreCase("inactive"));
        products.removeIf(product -> product.getStock()!=0);
        return new ResponseEntity<>(products.size(), HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id) {
        Optional<Product> productOpt = productService.getProductById(id);
        if (!productOpt.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Product product = productOpt.get();
        product.setStatus("inactive");
        productService.saveProduct(product);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PutMapping("/approve/{id}")
    public ResponseEntity<Product> approveProduct(@PathVariable int id) {
        Product product = productService.approveProduct(id);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/reject/{id}")
    public ResponseEntity<Product> rejectProduct(@PathVariable int id) {
        Product product = productService.rejectProduct(id);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/approved")
    public ResponseEntity<?> getAllApprovedProducts() {
        List<Product> products = productService.getAllApprovedProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
