/*
import React, { useState } from 'react';
import './product gallery.css';
import {productInfoArray as info} from "./Productpage";
import ProductInfo from "./ProductInfo";
import { useParams } from 'react-router-dom';
import { combinedProductDetails } from './Productpage';

const ProductGallery = ({ id,mainimage, thumbnailImages, iframeSrc }) => {
    const enlargeImage = (src) => {
        document.getElementById('enlargedImg').src = src;
    };

    if (!thumbnailImages) {

        return null; // or some fallback JSX
    }

    return (
        <div className="container mt-5">
            <br/>
            <br/>
            <div className="row">
                <div className="col-lg-5 order-2 order-lg-0">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-image">
                                <img id="enlargedImg" className="card-img-top" src={mainimage} alt="Main Product Image"/>
                                <div className="video-container">
                                    <iframe width="450" height="250" src={iframeSrc} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="row">
                                    {thumbnailImages.map((src, index) => (
                                        <div className="col-3" key={index}>
                                            <img src={src} className="img-thumbnail" alt={`Product Image ${index + 1}`} onMouseOver={() => enlargeImage(src)}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="card card-info">
                        <div className="card-body">
                            <h2 className="card-title text-center">Product Details</h2>
                            {info.map((product, {id}) => (
                                <ProductInfo
                                    key={id}
                                    title={product.title}
                                    ratings={product.ratings}
                                    orders={product.orders}
                                    inStock={product.inStock}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    Brand={product.Brand}
                                    Model={product.Model}
                                    Display={product.Display}
                                    Processor={product.Processor}
                                    Camera={product.Camera}
                                    Battery={product.Battery}
                                    OperatingSystem={product.OperatingSystem}
                                    Color={product.Color}
                                    Warranty={product.Warranty}
                                    Storage={product.Storage}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default ProductGallery;
*/
/*
import React from 'react';
import { useParams } from 'react-router-dom';
import './product gallery.css';
import { productGalleryMedia, productpagecards } from "./Productpage";
// Import Card and CardBody from reactstrap or Bootstrap

const ProductGallery = () => {
    const { productId } = useParams();
    const product = productpagecards.find(product => product.id === parseInt(productId));
    const mediaItem = productGalleryMedia.find(media => media.id === parseInt(productId));

    if (!product || !mediaItem) {
        return <div>Product not found</div>;
    }

    const { mainimage, thumbnailImages, iframeSrc } = mediaItem;

    const enlargeImage = (src) => {
        document.getElementById('enlargedImg').src = src;
    };

    return (
        <div className="container mt-5 mb-5"  style={{ margin: '80px' }}>
            <br />
            <br />
            <div className="row">
                <div className="col-lg-10 ">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-image ">
                                <img id="enlargedImg" className="card-img-top" src={mainimage} alt="Main Product Image" />
                                <div className="video-container">
                                    <iframe width="450" height="250" src={iframeSrc} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="mt-3">

                                        <div className="row">
                                            {thumbnailImages.map((src, index) => (
                                                <div className="col-2" key={index}> {/!* Decreased width to col-2 *!/}
                                                    <img src={src} className="img-thumbnail" alt={`Product Image ${index + 1}`} onMouseOver={() => enlargeImage(src)} />
                                                </div>
                                            ))}
                                        </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
*/
import React from 'react';
import { useParams } from 'react-router-dom';
import './product gallery.css';
import { Homeproductcard, Electroniccards,Beautyproductcard,Clothingproductcard} from "./Productdatas";

const ProductGallery = () => {
    const { productId, categoryId } = useParams();

    let product;
    if (categoryId === '1') {
        product = Electroniccards.find(product => product.productId === parseInt(productId));
    } else if (categoryId === '2') {
        product = Homeproductcard.find(product => product.productId === parseInt(productId));
    }
    else if (categoryId === '3') {
        product = Beautyproductcard.find(product => product.productId === parseInt(productId));
    }
    else if (categoryId === '4') {
        product = Clothingproductcard.find(product => product.productId === parseInt(productId));
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const { mainimage, thumbnailImages, iframeSrc } = product;

    const enlargeImage = (src) => {
        document.getElementById('enlargedImg').src = src;
    };

    return (
        <div className="container mt-5 mb-5" style={{ margin: '80px' }}>
            <br />
            <br />
            <div className="row">
                <div className="col-lg-10 ">
                    <div className="row">
                        <div className="col-12">
                            <div className="card-d card-image ">
                                <img id="enlargedImg" className="card-img-top" src={mainimage} alt="Main Product Image" />
                                <div className="video-container">
                                    <iframe width="450" height="250" src={iframeSrc} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="row">
                                    {thumbnailImages.map((src, index) => (
                                        <div className="col-2" key={index}>
                                            <img src={src} className="img-thumbnail" alt={`Product Image ${index + 1}`} onMouseOver={() => enlargeImage(src)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
