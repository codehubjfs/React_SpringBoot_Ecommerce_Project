import React from 'react';
import { useParams } from 'react-router-dom';
import { Electroniccards, productGalleryMedia, Homeproductcard, Beautyproductcard, Clothingproductcard } from "../components/Productdatas";
import '../components/product gallery.css';
import ProductGallery from "../components/ProductGallery"; // Import ProductGallery component
import ProductLayout from "../layouts/ProductLayout";
import { Container } from "react-bootstrap";
import SimilarProduct from "../components/SimilarProduct";
import Description from "../components/Description";
import ProductButtons from "../components/Productbuttons"; // Import ProductButtons component
import Faq from '../components/Faq';
const ProductDetailPage = () => {
    const { categoryId, productId } = useParams();

    const findProduct = (categoryId, productId) => {
        switch (categoryId) {
            case '1':
                return Electroniccards.find(item => item.productId === parseInt(productId));
            case '2':
                return Homeproductcard.find(item => item.productId === parseInt(productId));
            case '3':
                return Beautyproductcard.find(item => item.productId === parseInt(productId));
            case '4':
                return Clothingproductcard.find(item => item.productId === parseInt(productId));
            default:
                return null;
        }
    };

    const handleCheckout = () => {
        window.location.href = `/checkout/${categoryId}/${productId}`;
    };

    const product = findProduct(categoryId, productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const renderDetails = () => {
        let originalPrice = product.originalPrice;
        let price = product.price;
        const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);

        return (
            <div className="card-d" style={{ marginRight: '80px' }}>
                <div className="card-header">
                    <h2 className="card-title text-center text-uppercase fw-bold">Product Details</h2>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <div><b>Price</b></div>
                    <div><strong>{discountPercentage}% off </strong> ₹<strong>{price}</strong></div>
                    <div className="text-muted" style={{ textDecoration: 'line-through' }}>M.R.P.:
                        ₹{product.originalPrice}</div>
                    <ProductButtons handleCheckout={handleCheckout} categoryId={categoryId} productId={productId} />

                    <table className="table table-borderless mt-3">
                        <tbody>
                            {Object.entries(product).map(([key, value]) => {
                                if (
                                    (categoryId === '1' &&
                                        ['Brand', 'Model', 'Displaysize', 'Processors', 'Camera', 'Battery', 'OperatingSystem', 'Color', 'Warranty', 'Storage'].includes(
                                            key
                                        )) ||
                                    (categoryId === '2' && ['Brand', 'Model', 'Dimensions', 'Material', 'Color', 'Size'].includes(key)) ||
                                    (categoryId === '3' && ['Brand', 'Model', 'skintype', 'Ingredients', 'Benefits', 'Content'].includes(key)) ||
                                    (categoryId === '4' && ['Brand', 'Material', 'Model', 'Size', 'Color'].includes(key))
                                ) {
                                    return (
                                        <tr key={key}>
                                            <td>
                                                <b>{key}</b>
                                            </td>
                                            <td>{value}</td>
                                        </tr>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const mediaItem = productGalleryMedia.find(media => media.id === parseInt(productId));
    const products = categoryId === '1' ? Electroniccards : categoryId === '2' ? Homeproductcard : categoryId === '3' ? Beautyproductcard : Clothingproductcard;
    const similarProducts = products.filter(p => p.productId !== product.productId);

    return (
        <div>
            <ProductLayout>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1 }}>
                        <ProductGallery productId={productId} mediaItem={mediaItem} />
                    </div>

                    <div style={{ flex: 1 }}>
                        <br />
                        <br />
                        <br />
                        <br />
                        {renderDetails()}
                    </div>
                </div>
                <section className="bg-light border-top py-4">
                    <Container fluid>
                        <Description productId={productId} categoryId={categoryId} />
                    </Container>
                </section>
                <FaqSection faq={product.faq} />
                 <section className="bg-light border-top py-4">
                <Container fluid>
                    <h2 className="text-center mb-4">Similar Products</h2>
<SimilarProduct similarProducts={similarProducts} />
                  </Container>
            </section>
            </ProductLayout>
        </div>
    );
};

const FaqSection = ({ faq }) => {
    if (!faq) {
        return null;
    }

    return (
        <section className="bg-light border-top py-4">
            <Container fluid>
                <Faq faq={faq} />
            </Container>
        </section>
    );
};

export default ProductDetailPage;