package com.horizon.model;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "products")
public class Product {
    @Id
    @SequenceGenerator(name = "product_seq", sequenceName = "product_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_seq")
    private int productId;
    private String productTitle;
    private String description;
    private String price;
    private int stock;
    private String brand;
    
    @Temporal(TemporalType.DATE)
    private Date dateOfAddition;
    
    private int supplierId;
    private int rating;
    private String category;
    private String status;
    private String decession;
    private String mainImage;
    private String thumbnail1;
    private String thumbnail2;
    private String thumbnail3;
    private String thumbnail4;
    private String video;

    public Product() {
        super();
    }

	public Product(int productId, String productTitle, String description, String price, int stock, String brand,
			Date dateOfAddition, int supplierId, int rating, String category, String status, String decession,
			String mainImage, String thumbnail1, String thumbnail2, String thumbnail3, String thumbnail4,
			String video) {
		super();
		this.productId = productId;
		this.productTitle = productTitle;
		this.description = description;
		this.price = price;
		this.stock = stock;
		this.brand = brand;
		this.dateOfAddition = dateOfAddition;
		this.supplierId = supplierId;
		this.rating = rating;
		this.category = category;
		this.status = status;
		this.decession = decession;
		this.mainImage = mainImage;
		this.thumbnail1 = thumbnail1;
		this.thumbnail2 = thumbnail2;
		this.thumbnail3 = thumbnail3;
		this.thumbnail4 = thumbnail4;
		this.video = video;
	}

	public int getProductId() {
		return productId;
	}

	public String getProductTitle() {
		return productTitle;
	}

	public String getDescription() {
		return description;
	}

	public String getPrice() {
		return price;
	}

	public int getStock() {
		return stock;
	}

	public String getBrand() {
		return brand;
	}

	public Date getDateOfAddition() {
		return dateOfAddition;
	}

	public int getSupplierId() {
		return supplierId;
	}

	public int getRating() {
		return rating;
	}

	public String getCategory() {
		return category;
	}

	public String getStatus() {
		return status;
	}

	public String getDecession() {
		return decession;
	}

	public String getMainImage() {
		return mainImage;
	}

	public String getThumbnail1() {
		return thumbnail1;
	}

	public String getThumbnail2() {
		return thumbnail2;
	}

	public String getThumbnail3() {
		return thumbnail3;
	}

	public String getThumbnail4() {
		return thumbnail4;
	}

	public String getVideo() {
		return video;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public void setProductTitle(String productTitle) {
		this.productTitle = productTitle;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public void setDateOfAddition(Date dateOfAddition) {
		this.dateOfAddition = dateOfAddition;
	}

	public void setSupplierId(int supplierId) {
		this.supplierId = supplierId;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setDecession(String decession) {
		this.decession = decession;
	}

	public void setMainImage(String mainImage) {
		this.mainImage = mainImage;
	}

	public void setThumbnail1(String thumbnail1) {
		this.thumbnail1 = thumbnail1;
	}

	public void setThumbnail2(String thumbnail2) {
		this.thumbnail2 = thumbnail2;
	}

	public void setThumbnail3(String thumbnail3) {
		this.thumbnail3 = thumbnail3;
	}

	public void setThumbnail4(String thumbnail4) {
		this.thumbnail4 = thumbnail4;
	}

	public void setVideo(String video) {
		this.video = video;
	}
	

    // Getters and Setters
    
}
