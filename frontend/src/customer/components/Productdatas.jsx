import { useSelector } from "react-redux";

export const description = {
    products: [
        {

            productId: 1,
            categoryId:1,
            title: 'iPhone 15 plus',
            descriptions: [
                {
                    title: 'Dynamic Island',
                    content: 'Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can track your next ride, see who’s calling, check your flight status, and so much more.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Dynamic Island'
                },
                {
                    title: 'Camera',
                    content: 'The camera system on iPhone 15 is unlike any other. With a new Ultra Wide camera, a redesigned Wide camera, and the new Telephoto camera, you’ll be able to take your best photos and videos ever.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Camera'
                },
                {
                    title: 'Performance',
                    content: 'The iPhone 15 is a powerful device that can deliver incredible performance. With a 6.1-inch Super Retina XDR display, a powerful CPU, and a powerful GPU, you can take your photos and videos with confidence.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f5eb9b65a19a4a84bd00439775ae2da1_18b05ad9990_-original-imaghxcpvtta2hzs.jpeg?q=90',
                    alt: 'Performance'
                },
                {
                    title: 'Battery Life',
                    content: 'The iPhone 15 has a long-lasting battery that can keep up with your busy lifestyle. With up to 22 hours of talk time, you can stay connected all day long.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fc4d9051e85c4779b845233c3effa64f_18b05b285e0_r1805_r1595_Product_Page_Flex_Module_Avail_Flipkart_Mobile_1024__en-IN_29.jpg.jpeg?q=90',
                    alt: 'Battery Life'
                }
            ]
        },
        {
            productId: 2,
            categoryId:1,
            title: 'iphone 15 pro',
            descriptions: [
                {
                    title: 'Display',
                    content: 'The iphone 15 pro features a stunning 6.6-inch Dynamic AMOLED display with vibrant colors and sharp details. It provides an immersive viewing experience for your favorite content.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Display'
                },
                {
                    title: 'Camera',
                    content: 'Capture every moment in perfect clarity with the iphone 15 pro\'s advanced camera system. With multiple lenses and AI-powered features, you can take stunning photos and videos.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Camera'
                },
                {
                    title: 'Performance',
                    content: 'Equipped with a powerful processor and ample RAM, the Samsung Galaxy S22 delivers smooth performance for multitasking, gaming, and productivity tasks. Experience seamless operation.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f5eb9b65a19a4a84bd00439775ae2da1_18b05ad9990_-original-imaghxcpvtta2hzs.jpeg?q=90',
                    alt: 'Performance'
                },
                {
                    title: 'Battery Life',
                    content: 'Stay connected all day long with the long-lasting battery life of the Samsung Galaxy S22. With fast charging support, you can quickly recharge your device and get back to what you love.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fc4d9051e85c4779b845233c3effa64f_18b05b285e0_r1805_r1595_Product_Page_Flex_Module_Avail_Flipkart_Mobile_1024__en-IN_29.jpg.jpeg?q=90',
                    alt: 'Battery Life'
                }
            ]
        },
        {
            productId: 3,
            categoryId:1,
            title: 'iphone 14',
            descriptions: [
                {
                    title: 'Camera',
                    content: 'The iphone 14 boasts an impressive camera system with advanced computational photography features. Capture stunning photos and videos in any lighting condition.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Camera'
                },
                {
                    title: 'Display',
                    content: 'Experience vibrant colors and sharp details on the iphone 14\'s high-resolution OLED display. Whether you\'re streaming videos or browsing the web, every content looks stunning.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Display'
                },
                {
                    title: 'Performance',
                    content: 'Powered by a fast processor and optimized software, the Google Pixel 7 offers smooth performance for your everyday tasks. Enjoy lag-free multitasking and gaming.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f5eb9b65a19a4a84bd00439775ae2da1_18b05ad9990_-original-imaghxcpvtta2hzs.jpeg?q=90',
                    alt: 'Performance'
                },
                {
                    title: 'Battery Life',
                    content: 'With intelligent battery management and fast charging support, the Google Pixel 7 ensures that you stay connected all day long without worrying about running out of power.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fc4d9051e85c4779b845233c3effa64f_18b05b285e0_r1805_r1595_Product_Page_Flex_Module_Avail_Flipkart_Mobile_1024__en-IN_29.jpg.jpeg?q=90',
                    alt: 'Battery Life'
                }
            ]
        },
        {
            productId: 4,
            categoryId:1,
            title: 'iphone 15 pro max',
            descriptions:[
                {
                    title: 'Display',
                    content: 'The iphone 15 pro max features a stunning 6.7-inch Dynamic AMOLED display with vibrant colors and sharp details. It provides an immersive viewing experience for your favorite content.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Display'
                },
                {
                    title: 'Camera',
                    content: 'Capture every moment in perfect clarity with the iphone 15 pro max\'s advanced camera system. With multiple lenses and AI-powered features, you can take stunning photos and videos.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Camera'
                },
                {
                    title: 'Performance',
                    content: 'Equipped with a powerful processor ,iphone 15 pro max  delivers smooth performance for multitasking, gaming, and productivity tasks. Experience seamless operation.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f5eb9b65a19a4a84bd00439775ae2da1_18b05ad9990_-original-imaghxcpvtta2hzs.jpeg?q=90',
                    alt: 'Performance'
                },
                {
                    title: 'Battery Life',
                    content: 'Stay connected all day long with the long-lasting battery life of the iphone 15 pro max. With fast charging support, you can quickly recharge your device and get back to what you love.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fc4d9051e85c4779b845233c3effa64f_18b05b285e0_r1805_r1595_Product_Page_Flex_Module_Avail_Flipkart_Mobile_1024__en-IN_29.jpg.jpeg?q=90',
                    alt: 'Battery Life'
                }
            ]
        },
        {
            productId: 5,
            categoryId:1,
            title: 'iphone 15',
            descriptions:[
                {
                    title: 'Camera',
                    content:
                        'The iphone 15 boasts an impressive camera system with advanced computational photography features. Capture stunning photos and videos in any lighting condition.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Camera'
                },
                {
                    title: 'Display',
                    content:
                        'Experience vibrant colors and sharp details on the iphone 15\'s high-resolution OLED display. Whether you\'re streaming videos or browsing the web, every content looks stunning.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90',
                    alt: 'Display'
                },

                {
                    title: 'Performance',
                    content:
                        'Powered by a fast processor and optimized software, the iphone 15 offers smooth performance for your everyday tasks. Enjoy lag-free multitasking and gaming.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/f5eb9b65a19a4a84bd00439775ae2da1_18b05ad9990_-original-imaghxcpvtta2hzs.jpeg?q=90',
                },
                {
                    title: 'Battery Life',
                    content:
                        'With intelligent battery management and fast charging support, the iphone 15 ensures that you stay connected all day long without worrying about running out of power.',
                    image: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/fc4d9051e85c4779b845233c3effa64f_18b05b285e0_r1805_r1595_Product_Page_Flex_Module_Avail_Flipkart_Mobile_1024__en-IN_29.jpg.jpeg?q=90',
                    alt: 'Battery Life'
                }
                 ]
        },
        {
            productId: 1,
            categoryId:2,
            title: 'Motorised recliner',
            descriptions:[
                {
                    title: 'Material',
                    content:
                        "The motorised recliner is made of high-quality leather that is soft to the touch and easy to clean. The leather is durable and long-lasting, ensuring that your recliner will look great for years to come.",
                    image: 'https://www.ulcdn.net/images/products/832530/product/FVSFRS51SB70437_LP.jpg?1689252446',
                    alt: 'Camera'

                },
                {
                    title: 'Comfort',
                    content:
                        'The motorised recliner features a plush cushioned seat and backrest that provide excellent support and comfort. The recliner also has a built-in footrest that can be extended for added relaxation.',
                    image: 'https://www.ulcdn.net/images/products/832532/product/FVSFRS51GY70439_LP.jpg?1689252447',
                    alt: 'Comfort'
                },


                {
                    title: 'Features',
                    content: "The motorised recliner has a number of features that make it a great addition to any living room. It has a built-in USB port for charging your devices, a cup holder for your drinks, and a remote control for easy operation.",
                    image: 'https://www.ulcdn.net/images/products/764298/product/FVSFRS62KB68305_LP.jpg?1678953178',
                    alt: 'Features',
                },
                {
                    title: 'Design',
                    content:
                        'The motorised recliner has a sleek and modern design that will complement any decor. It is available in a range of colors to suit your style and preferences.',
                    image: 'https://www.ulcdn.net/images/products/764298/product/FVSFRS62KB68305_LP.jpg?1678953178',
                    alt: 'Design',
                }
                ],
                },
        {
            productId: 2,
            categoryId:2,
            title: 'Sofa set',
            descriptions:[
                {
                    title: 'Material',
                    content:
                        "The sofa set is made of high-quality leather that is soft to the touch and easy to clean. The leather is durable and long-lasting, ensuring that your sofa set will look great for years to come.",
                    image:'https://www.ulcdn.net/images/products/808418/product/Emila_Recliner_3_Seter_Color_Blue_LP.png?1683921238',
                    alt: 'Material'
                },
                {
                    title: 'Comfort',
                    content:
                        'The sofa set features a comfortable seat and backrest that provide excellent support and comfort. The set also has a built-in footrest that can be extended for added relaxation.',
                    image: 'https://www.ulcdn.net/images/taxon_images/taxon/1541/taxon_col_3/Leatherette-sofa-sets.jpg',
                    alt: 'Comfort'
                },
                {
                    title: 'Design',
                    content:
                        'The sofa set has a sleek and modern design that will complement any decor. It is available in a range of colors to suit your style and preferences.',
                    image: 'https://www.ulcdn.net/images/taxon_images/taxon/669/taxon_col_3/Loveseats.jpg',
                    alt: 'Design'
                },{
                    title: 'Features',
                    content:
                        'The sofa set has a number of features that make it a great addition to any living room. It has a built-in USB port for charging your devices, a cup holder for your drinks, and a remote control for easy operation.',
                    image: 'https://www.ulcdn.net/images/taxon_images/taxon/1330/taxon_col_3/L-shaped-sofas.jpg',
                    alt: 'Features'

                }
                ],
        },
        {
            productId: 3,
            categoryId:2,
            title: 'Coffee table',
            descriptions:[
                {
                    title: 'Material',
                    content:"The coffee table is made of high-quality wood that is durable and long-lasting. The wood is finished with a protective coating that resists scratches and stains, ensuring that your coffee table will look great for years to come.",
                    image:'https://m.media-amazon.com/images/I/51eoKWxpEQL._SL1302_.jpg',
                    alt: 'Material'
                },
                {
                    title: 'Design',
                    content:
                        'The coffee table has a sleek and modern design that will complement any decor. It is available in a range of colors to suit your style and preferences.',
                    image: 'https://m.media-amazon.com/images/I/81RrWG67fWL._SL1500_.jpg',
                    alt: 'Design'
                },

                {
                    title: 'Features',
                    content:
                        'The coffee table has a number of features that make it a great addition to any living room. It has a built-in storage shelf for books and magazines, and a hidden compartment for storing remotes and other small items.',
                    image: 'https://m.media-amazon.com/images/I/51eoKWxpEQL._SL1302_.jpg',
                    alt: 'Features'

                },

                {
                    title: 'Dimensions',
                    content:
                        'The coffee table measures 48 inches long, 24 inches wide, and 18 inches high, making it the perfect size for any living room. It is easy to assemble and comes with all the necessary hardware.',
                    image: 'https://m.media-amazon.com/images/I/51mF33LSqQL._SL1500_.jpg',
                    alt: 'Comfort'
                }
                ],
        },
        {
            productId: 1,
            categoryId:3,
            title: 'L’Oréal Paris Glycolic Bright Dark Circle Eye Serum',
            descriptions:[
                {
                    title: 'Brightening Formula',
                    content:
                        "The eye serum is made of high-quality ingredients that are gentle on the delicate skin around the eyes. The serum is formulated with glycolic acid and vitamin C to brighten and smooth the skin, reducing the appearance of dark circles and puffiness.",
                    image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRquRFWnCd0PHreWtEL9Lu_s0M5uVSVI01ZFz00AGWS-ytLkzRfq9hyx7L-g7AWZBew8WY6ISpMPCkkykaDUSNyTLOOtTn5xWLWerrBZXsCNAnXKp1ob3ahFA&usqp=CAE',
                    alt: 'Brightening Formula'
                },
                {
                    title: 'Design',
                    content:
                        'The eye serum has a sleek and modern design that will complement any decor. It is available in a range of colors to suit your style and preferences.',
                    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDUAged_MeperqmNZl15IlNgJXDUyF-dy7ItiUMZf_bat_TaGI4xVV_6L7CXdprUoQ_4tzhiuIdlm6ITtH-BIH2uqORC9b30T4sSPap6GWaRVLjz0b1dTG&usqp=CAE',
                    alt: 'Design'


                },

                {
                    title: 'Benefits',
                    content: "The eye serum has a number of benefits that make it a great addition to any skincare routine. It helps to reduce the appearance of dark circles, puffiness, and fine lines, leaving the skin looking brighter and more youthful.",
                    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKsTvLbFBy_NkFRx41QJ5Nfs22Wo9MnkYA1_WQqlq06HpUdppZbef3HPuuBYTPYXK4_oLl6AztTQY9kUrodo367_uStT3FfusmPeMm948wq-vJ2E6QQDec&usqp=CAE',
                    alt: 'Benefits'
                },
                {
                    title: 'Available Contents',
                    content:
                        'The eye serum is available in a range of sizes to suit your needs. It is easy to apply and absorbs quickly into the skin, leaving it feeling soft and smooth.',
                    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDUAged_MeperqmNZl15IlNgJXDUyF-dy7ItiUMZf_bat_TaGI4xVV_6L7CXdprUoQ_4tzhiuIdlm6ITtH-BIH2uqORC9b30T4sSPap6GWaRVLjz0b1dTG&usqp=CAE',
                    alt: 'Available Contents'
                }
                ],
                },
        {
            productId: 2,
            categoryId:3,
            title:'Kimirica Love Story Luxury Bath and Body Care Gift set',
            descriptions:[
                {
                    title: 'Material',
                    content:"The bath and body care gift set is made of high-quality ingredients that are gentle on the skin. The set includes a shower gel, body lotion, and body mist, all scented with the luxurious Love Story fragrance.",
                    image:'https://m.media-amazon.com/images/I/71kXA9QeZsL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Material'
                },

                {   title: 'Design',
                    content:"The bath and body care gift set has a sleek and modern design that will complement any decor. It is available in a range of colors to suit your style and preferences.",
                    image: 'https://m.media-amazon.com/images/I/71CVtHANDaL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Design'

                },
                {
                    title: 'Benefits',
                    content:"The bath and body care gift set has a number of benefits that make it a great addition to any skincare routine. It helps to reduce the appearance of fine lines and puffiness, leaving the skin looking more youthful and soft.",
                    image: 'https://m.media-amazon.com/images/I/617-SK8VzOL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Benefits'
                },
                {
                    title: 'Available Contents',
                    content:"The bath and body care gift set is available in a range of sizes to suit your needs. It is easy to apply and absorbs quickly into the skin, leaving it feeling soft and smooth.",
                        image: 'https://m.media-amazon.com/images/I/71SjFxeoaGL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Available Contents'
                }
                ],
        },
        {
            productId: 1,
            categoryId: 4,
            title: 'Men\'s Casual Shirt',
            descriptions: [
                {
                    title: 'Material',
                    content: "The casual shirt is made of high-quality cotton that is soft and comfortable to wear. The shirt is available in a range of colors to suit your style and preferences.",
                    image: 'https://m.media-amazon.com/images/I/71K4ZJCCdzL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Material'
                },

                {
                    title: 'Design',
                    content: "The casual shirt has a sleek and modern design that will complement any outfit. It is available in a range of sizes to suit your needs.",
                    image: 'https://m.media-amazon.com/images/I/81hxCj6SQrL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Design'

                },
                {
                    title: 'Benefits',
                    content: "The casual shirt is easy to care for and can be machine washed for convenience. It is wrinkle-resistant and retains its shape and color after multiple washes.",
                    image: 'https://m.media-amazon.com/images/I/71dsiWEmoJL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Benefits'
                },
                {
                    title: 'Available Colors',
                    content: "The casual shirt is available in a range of colors to suit your style and preferences. It is easy to assemble and comes with all the necessary hardware.",
                    image: 'https://m.media-amazon.com/images/I/51KDjFiVU6L._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Available Contents'
                }
            ],

        },
        {
            productId: 2,
            categoryId:4,
            title:"INKAST Men's Slim Fit Denim Shirt",
            descriptions:[
                {
                    title: 'Material',
                    content: "The denim shirt is made of high-quality denim that is soft and comfortable to wear. The shirt is available in a range of colors to suit your style and preferences.",
                    image: 'https://m.media-amazon.com/images/I/61LAQFDIlcL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Material',
                },
                {
                    title: 'Design',
                    content: "The denim shirt has a sleek and modern design that will complement any outfit. It is available in a range of sizes to suit your needs.",
                    image: 'https://m.media-amazon.com/images/I/91zVzlGDADL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Design',
                },
                {
                    title: 'Benefits',
                    content: "The denim shirt is easy to care for and can be machine washed for convenience. It is wrinkle-resistant and retains its shape and color after multiple washes.",
                    image: 'https://m.media-amazon.com/images/I/71K4ZJCCdzL._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Benefits',
                },
                {
                    title: 'Available Colors',
                    content: "The denim shirt is available in a range of colors to suit your style and preferences. It is easy to assemble and comes with all the necessary hardware.",
                    image: 'https://m.media-amazon.com/images/I/81FguBH+x1L._AC_UL480_FMwebp_QL65_.jpg',
                    alt: 'Available Colors',
                },
            ],
        }
    ]
};

export const productGalleryMedia =[

        {
            productId: 1,
            categoryId:1,
            mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438',
            alt: 'iPhone 15 plus',
            thumbnailImages: [
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-3-202309_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1695316289152',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011173388',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-plus-digitalmat-gallery-7-202403?wid=728&hei=666&fmt=png-alpha&.v=1708120679559',
            ],
            iframeSrc: 'https://www.youtube.com/embed/XHTrLYShBRQ'

        },

    {
        productId: 2,
        categoryId:1,
        mainimage: 'https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70&crop=false',
        alt: 'iPhone 15 pro',
        thumbnailImages: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
        ],
        iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA'

    },
    {
        productId: 3,
        categoryId:1,
        mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660691647082',
        alt: 'iPhone 14 ',
        thumbnailImages: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671474739178',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1677293707302',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676506020163'
        ],
        iframeSrc: 'https://www.youtube.com/embed/FT3ODSg1GFE'
    },
    {

        productId: 4,
        categoryId:1,
        mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
        alt: 'iPhone 15 pro max',
        thumbnailImages: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
        ],
        iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA'
    },
    {
        productId: 5,
        categoryId:1,
        mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169058',
        alt: 'iPhone 15 ',
        thumbnailImages: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-3-202309_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1695316289152',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-5-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169178',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-plus-digitalmat-gallery-7-202403?wid=728&hei=666&fmt=png-alpha&.v=1708120679559'
        ],
        iframeSrc: 'https://www.youtube.com/embed/XHTrLYShBRQ'

    },
    {
        categoryId:2,
        productId: 1,
        mainimage: 'https://m.media-amazon.com/images/I/81HfRhFqYPL._SL1500_.jpg',
        alt: 'Motorised Recliner',
        thumbnailImages: [
            'https://m.media-amazon.com/images/I/81TJ0KRCnBL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/81wMwfGYk7L._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71aIeyLPjtL._SL1500_.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/JnX4IY-ZW0U'

    },
    {
        categoryId:2,
        productId: 2,
        mainimage: 'https://m.media-amazon.com/images/I/51nBL8hPvlL._SL1022_.jpg',
        alt: 'Sofa',
        thumbnailImages: [

            'https://m.media-amazon.com/images/I/31KEezxJOsL.jpg',
            'https://m.media-amazon.com/images/I/31JOOSK75YL.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/mLFxCFR3bR0'

    },{

        categoryId:2,
        productId: 3,
        mainimage: 'https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg',
        alt: 'table',
        thumbnailImages: [
            'https://m.media-amazon.com/images/I/A1xYAO9YGNL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg',
            'https://m.media-amazon.com/images/I/71ZEoHN8bbL._SL1500_.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/SZHlwbIBl6o'
    },
    {
        categoryId:2,
        productId: 4,
        mainimage: 'https://m.media-amazon.com/images/I/513I7-J-HqL._SL1302_.jpg',
        alt: 'table',
        thumbnailImages: [
            'https://m.media-amazon.com/images/I/71DFNnTNrLL._SL1432_.jpg',
            'https://m.media-amazon.com/images/I/815DNhAKreL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/51lZajKQQmL._SL1406_.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/mjysBqocfdc'
    }

]












export const Electroniccards =[

    
    {
        "categoryId": 1,
        "productId": 1,
        "imageSrc": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
        "title": "iPhone 15 Plus Red (5G)",
        "content": "Triple-lens rear camera system with 48MP main camera, 12MP wide camera, 12MP ultra-wide camera, and 12MP telephoto camera",
        "price": 77499,
        "ratings": 4,
        "productName": "iPhone 15 Plus Red (5G)",
        "orders": 120,
        "inStock": true,
        "originalPrice": 84,
        "Brand": "Apple",
        "Model": "iPhone 15 Plus 5G",
        "Displaysize": "6.7-inch Super Retina XDR display",
        "Processors": "A15 Bionic chip",
        "Camera": "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
        "Battery": "3,095mAh battery with MagSafe charging",
        "OperatingSystem": "iOS 15",
        "Color": "Red",
        "Warranty": "1 year",
        "Storage": "128GB",
        "mainimage": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
        "alt": "iPhone 15 Plus",
        "thumbnailImages": [
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-3-202309_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1695316289152",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011173388",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-plus-digitalmat-gallery-7-202403?wid=728&hei=666&fmt=png-alpha&.v=1708120679559"
        ],
        "iframeSrc": "https://www.youtube.com/embed/XHTrLYShBRQ",
        "faq": [
            {
                "question": "What colors does the iPhone 15 Plus 5G come in?",
                "answer": "The iPhone 15 Plus 5G is available in Red, Blue, Green, Yellow, and Pink."
            },
            {
                "question": "What is the warranty period for the iPhone 15 Plus 5G?",
                "answer": "The iPhone 15 Plus 5G comes with a 1-year warranty."
            },
            {
                "question": "What are the storage options for the iPhone 15 Plus 5G?",
                "answer": "The iPhone 15 Plus 5G is available in 128GB, 256GB, and 512GB storage options."
            },
            {
                "question": "What is the display size of the iPhone 15 Plus 5G?",
                "answer": "The iPhone 15 Plus 5G features a 6.7-inch Super Retina XDR display."
            },
            {
                "question": "What is the battery capacity of the iPhone 15 Plus 5G?",
                "answer": "The iPhone 15 Plus 5G is equipped with a 3,095mAh battery with MagSafe charging."
            }
        ]
    },
    {
        "categoryId": 1,
        "productId": 2,
        "imageSrc": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
        "title": "iPhone 15 Plus 5G",
        "content": "Triple-lens rear camera system with 48MP main camera, 12MP wide camera, 12MP ultra-wide camera, and 12MP telephoto camera",
        "price": 77499,
        "ratings": 4,
        "productName": "iPhone 15 Plus 5G",
        "orders": 120,
        "inStock": true,
        "originalPrice": 84999,
        "Brand": "Apple",
        "Model": "iPhone 15 Plus 5G",
        "Displaysize": "6.7-inch Super Retina XDR display",
        "Processors": "A15 Bionic chip",
        "Camera": "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
        "Battery": "3,095mAh battery with MagSafe charging",
        "OperatingSystem": "iOS 15",
        "Color": "Blue",
        "Warranty": "1 year",
        "Storage": "256GB",
        "mainimage": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
        "alt": "iPhone 15 Plus",
        "thumbnailImages": [
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-3-202309_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1695316289152",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011173388",
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-plus-digitalmat-gallery-7-202403?wid=728&hei=666&fmt=png-alpha&.v=1708120679559"
        ],
        "iframeSrc": "https://www.youtube.com/embed/XHTrLYShBRQ",
        "faq": [
            {
                "question": "What colors does the iPhone 15 Plus 5G come in?",
                "answer": "The iPhone 15 Plus 5G is available in Red, Blue, Green, Yellow, and Pink."
            },
            {
                "question": "What is the warranty period for the iPhone 15 Plus 5G?",
                "answer": "The iPhone 15 Plus 5G comes with a 1-year warranty."
            },
            {
                "question": "What are the storage options for the iPhone 15 Plus 5G?",
                "answer": "The iPhone 15 Plus 5G is available in 128GB, 256GB, and 512GB storage options."
            },
            {
                "question": "What is the display size of the iPhone 15 Plus 5G?",
                "answer": "The iPhone 15 Plus 5G features a 6.7-inch Super Retina XDR display."
            },
            {
                "question": "What is the battery capacity of the iPhone 15 Plus 5G?",
                "answer": "The iPhone 15 Plus 5G is equipped with a 3,095mAh battery with MagSafe charging."
            }
        ]
    },
    {
    categoryId: 1,
    productId: 3,
    imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387",
    title: "iPhone 15 Red (5G)",
    content: "Super Retina XDR display 15.54 cm / 6.1″ (diagonal) all‑screen OLED display 2556x1179-pixel resolution at 460 ppi",
    price: 134900,
    ratings: 3,
    productName: "iPhone15 Pro Red (5G)",
    orders: 120,
    inStock: true,
    originalPrice: 159999,
    Brand: "Apple",
    Model: "iPhone 15 Pro",
    DisplaySize: "6.9-inch Super Retina XDR display",
    Processors: "A16 Bionic chip",
    Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    Battery: "3,095mAh battery with MagSafe charging",
    OperatingSystem: "iOS 16",
    Color: "Red",
    Warranty: "1 year",
    Storage: "128GB",
    mainImage: 'https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70&crop=false',
    alt: 'iPhone 15 Pro',
    thumbnailImages: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
    ],
    iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA',
    faq: [
        {
            question: "What colors does the iPhone 15 Pro come in?",
            answer: "The iPhone 15 Pro is available in Red, Blue, Green, Yellow, and Pink."
        },
        {
            question: "What is the warranty period for the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro comes with a 1-year warranty."
        },
        {
            question: "What are the storage options for the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro is available in 128GB, 256GB, and 512GB storage options."
        },
        {
            question: "What is the display size of the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro features a 6.9-inch Super Retina XDR display."
        },
        {
            question: "What is the battery capacity of the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro is equipped with a 3,095mAh battery with MagSafe charging."
        }
    ]
},
{
    categoryId: 1,
    productId: 3,
    imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387",
    title: "iPhone 15 Red (5G)",
    content: "Super Retina XDR display 15.54 cm / 6.1″ (diagonal) all‑screen OLED display 2556x1179-pixel resolution at 460 ppi",
    price: 134900,
    ratings: 3,
    productName: "iPhone15 Pro Blue (5G)",
    orders: 120,
    inStock: true,
    originalPrice: 159999,
    Brand: "Apple",
    Model: "iPhone 15 Pro",
    DisplaySize: "6.9-inch Super Retina XDR display",
    Processors: "A16 Bionic chip",
    Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    Battery: "3,095mAh battery with MagSafe charging",
    OperatingSystem: "iOS 16",
    Color: "Blue",
    Warranty: "1 year",
    Storage: "256GB",
    mainImage: 'https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70&crop=false',
    alt: 'iPhone 15 Pro',
    thumbnailImages: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
    ],
    iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA',
    faq: [
        {
            question: "What colors does the iPhone 15 Pro come in?",
            answer: "The iPhone 15 Pro is available in Red, Blue, Green, Yellow, and Pink."
        },
        {
            question: "What is the warranty period for the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro comes with a 1-year warranty."
        },
        {
            question: "What are the storage options for the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro is available in 128GB, 256GB, and 512GB storage options."
        },
        {
            question: "What is the display size of the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro features a 6.9-inch Super Retina XDR display."
        },
        {
            question: "What is the battery capacity of the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro is equipped with a 3,095mAh battery with MagSafe charging."
        }
    ]
},
{
    categoryId: 1,
    productId: 3,
    imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387",
    title: "iPhone 15 Red (5G)",
    content: "Super Retina XDR display 15.54 cm / 6.1″ (diagonal) all‑screen OLED display 2556x1179-pixel resolution at 460 ppi",
    price: 134900,
    ratings: 3,
    productName: "iPhone15 Pro Red (5G)",
    orders: 120,
    inStock: true,
    originalPrice: 159999,
    Brand: "Apple",
    Model: "iPhone 15 Pro",
    DisplaySize: "6.9-inch Super Retina XDR display",
    Processors: "A16 Bionic chip",
    Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    Battery: "3,095mAh battery with MagSafe charging",
    OperatingSystem: "iOS 16",
    Color: "Yellow",
    Warranty: "1 year",
    Storage: "512GB",
    mainImage: 'https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70&crop=false',
    alt: 'iPhone 15 Pro',
    thumbnailImages: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
    ],
    iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA',
    faq: [
        {
            question: "What colors does the iPhone 15 Pro come in?",
            answer: "The iPhone 15 Pro is available in Red, Blue, Green, Yellow, and Pink."
        },
        {
            question: "What is the warranty period for the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro comes with a 1-year warranty."
        },
        {
            question: "What are the storage options for the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro is available in 128GB, 256GB, and 512GB storage options."
        },
        {
            question: "What is the display size of the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro features a 6.9-inch Super Retina XDR display."
        },
        {
            question: "What is the battery capacity of the iPhone 15 Pro?",
            answer: "The iPhone 15 Pro is equipped with a 3,095mAh battery with MagSafe charging."
        }
    ]
},
    {
    categoryId: 1,
    productId: 4,
    imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660691647082",
    title: "iPhone 14",
    content: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    price: 87999,
    ratings: 3,
    productName: "iPhone 14",
    orders: 120,
    inStock: true,
    originalPrice: 99999,
    Brand: "Apple",
    Model: "iPhone 14",
    DisplaySize: "6.7-inch Super Retina XDR display",
    Processors: "A15 Bionic chip",
    Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    Battery: "3,095mAh battery with MagSafe charging",
    OperatingSystem: "iOS 15",
    Color: "Green",
    Warranty: "1 year",
    Storage:  "512GB",
    mainImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
    alt: 'iPhone 15 pro max',
    thumbnailImages: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
    ],
    iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA',
    faq: [
        {
            question: "What colors does the iPhone 14 come in?",
            answer: "The iPhone 14 is available in Red, Blue, Green, Yellow, and Pink."
        },
        {
            question: "What is the warranty period for the iPhone 14?",
            answer: "The iPhone 14 comes with a 1-year warranty."
        },
        {
            question: "What are the storage options for the iPhone 14?",
            answer: "The iPhone 14 is available in 128GB, 256GB, and 512GB storage options."
        },
        {
            question: "What is the display size of the iPhone 14?",
            answer: "The iPhone 14 features a 6.7-inch Super Retina XDR display."
        },
        {
            question: "What is the battery capacity of the iPhone 14?",
            answer: "The iPhone 14 is equipped with a 3,095mAh battery with MagSafe charging."
        }
    ]
},
{
    categoryId: 1,
    productId: 5,
    imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660691647082",
    title: "iPhone 14",
    content: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    price: 87999,
    ratings: 3,
    productName: "iPhone 14 Red",
    orders: 120,
    inStock: true,
    originalPrice: 99999,
    Brand: "Apple",
    Model: "iPhone 14",
    DisplaySize: "6.7-inch Super Retina XDR display",
    Processors: "A15 Bionic chip",
    Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    Battery: "3,095mAh battery with MagSafe charging",
    OperatingSystem: "iOS 15",
    Color: "Red",
    Warranty: "1 year",
    Storage: "128GB",
    mainImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
    alt: 'iPhone 15 pro max',
    thumbnailImages: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
    ],
    iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA',
    faq: [
        {
            question: "What colors does the iPhone 14 come in?",
            answer: "The iPhone 14 is available in Red, Blue, Green, Yellow, and Pink."
        },
        {
            question: "What is the warranty period for the iPhone 14?",
            answer: "The iPhone 14 comes with a 1-year warranty."
        },
        {
            question: "What are the storage options for the iPhone 14?",
            answer: "The iPhone 14 is available in 128GB, 256GB, and 512GB storage options."
        },
        {
            question: "What is the display size of the iPhone 14?",
            answer: "The iPhone 14 features a 6.7-inch Super Retina XDR display."
        },
        {
            question: "What is the battery capacity of the iPhone 14?",
            answer: "The iPhone 14 is equipped with a 3,095mAh battery with MagSafe charging."
        }
    ]
},
{
    categoryId: 1,
    productId: 6,
    imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660691647082",
    title: "iPhone 14",
    content: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    price: 87999,
    ratings: 3,
    productName: "iPhone 14",
    orders: 120,
    inStock: true,
    originalPrice: 99999,
    Brand: "Apple",
    Model: "iPhone 14",
    DisplaySize: "6.7-inch Super Retina XDR display",
    Processors: "A15 Bionic chip",
    Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    Battery: "3,095mAh battery with MagSafe charging",
    OperatingSystem: "iOS 15",
    Color:"Blue",
    Warranty: "1 year",
    Storage:  "256GB",
    mainImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
    alt: 'iPhone 14 ',
    thumbnailImages: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
    ],
    iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA',
    faq: [
        {
            question: "What colors does the iPhone 14 come in?",
            answer: "The iPhone 14 is available in Red, Blue, Green, Yellow, and Pink."
        },
        {
            question: "What is the warranty period for the iPhone 14?",
            answer: "The iPhone 14 comes with a 1-year warranty."
        },
        {
            question: "What are the storage options for the iPhone 14?",
            answer: "The iPhone 14 is available in 128GB, 256GB, and 512GB storage options."
        },
        {
            question: "What is the display size of the iPhone 14?",
            answer: "The iPhone 14 features a 6.7-inch Super Retina XDR display."
        },
        {
            question: "What is the battery capacity of the iPhone 14?",
            answer: "The iPhone 14 is equipped with a 3,095mAh battery with MagSafe charging."
        }
    ]
},


    {
    categoryId: 1,
    productId: 7,
    imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387",
    title: "iPhone 15 Pro Max",
    content: "Super Retina XDR display 17.00 cm / 6.7″ (diagonal) all‑screen OLED display 2796x1290-pixel resolution at 460 ppi",
    price: 159900,
    ratings: 3,
    productName: "iPhone 15 Pro Max",
    orders: 120,
    inStock: true,
    originalPrice: 175000,
    Brand: "Apple",
    Model: "iPhone 15 Pro Max",
    DisplaySize: "6.11-inch Super Retina XDR display",
    Processors: "A15 Bionic chip",
    Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
    Battery: "4,500mAh battery with MagSafe charging",
    OperatingSystem: "iOS 17",
    Color: "Red",
    Warranty: "1 year",
    Storage:  "512GB",
    mainImage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
    alt: 'iPhone 15 Pro Max',
    thumbnailImages: [
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
    ],
    iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA',
    faq: [
        {
            question: "What colors does the iPhone 15 Pro Max come in?",
            answer: "The iPhone 15 Pro Max is available in Red, Blue, Green, Yellow, and Pink."
        },
        {
            question: "What is the warranty period for the iPhone 15 Pro Max?",
            answer: "The iPhone 15 Pro Max comes with a 1-year warranty."
        },
        {
            question: "What are the storage options for the iPhone 15 Pro Max?",
            answer: "The iPhone 15 Pro Max is available in 128GB, 256GB, and 512GB storage options."
        },
        {
            question: "What is the display size of the iPhone 15 Pro Max?",
            answer: "The iPhone 15 Pro Max features a 6.11-inch Super Retina XDR display."
        },
        {
            question: "What is the battery capacity of the iPhone 15 Pro Max?",
            answer: "The iPhone 15 Pro Max is equipped with a 4,500mAh battery with MagSafe charging."
        }
    ]
},

    {
        categoryId:1,
        productId: 8,

        imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
        title: "I phone 15 ",
        content: "Super Retina XDR display 17.00 cm / 6.7″ (diagonal) all‑screen OLED display 2796x1290-pixel resolution at 460 ppi",
        price: 66999,
        ratings: 4.5,
        productName: "iPhone15 ",
        orders: 120,
        inStock: true,
        originalPrice: 74999,
        Brand: "Apple",
        Model: "iPhone 15",
        Displaysize: "6.8-inch Super Retina XDR display",
        Processors: "A15 Bionic chip",
        Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
        Battery: "3,095mAh battery with MagSafe charging",
        OperatingSystem: "iOS 15",
        Color: " Green ",
        Warranty: "1 year",
        Storage:  "512GB",
        mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169058',
        alt: 'iPhone 15 ',
        thumbnailImages: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-3-202309_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1695316289152',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-5-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169178',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-plus-digitalmat-gallery-7-202403?wid=728&hei=666&fmt=png-alpha&.v=1708120679559'
        ],
        iframeSrc: 'https://www.youtube.com/embed/XHTrLYShBRQ',
        faq: [
{
question: "What colors does the iPhone 15 come in?",
answer: "The iPhone 15 is available in Red, Blue, Green, Yellow, and Pink."
},
{
question: "What is the warranty period for the iPhone 15?",
answer: "The iPhone 15 comes with a 1-year warranty."
},
{
question: "What are the storage options for the iPhone 15?",
answer: "The iPhone 15 is available in 128GB, 256GB, and 512GB storage options."
},
{
question: "What is the display size of the iPhone 15?",
answer: "The iPhone 15 features a 6.8-inch Super Retina XDR display."
},
{
question: "What is the battery capacity of the iPhone 15?",
answer: "The iPhone 15 is equipped with a 3,095mAh battery with MagSafe charging."
}
]



    }


];
export const Homeproductcard = [

    {
        categoryId:2,
        productId: 1,

        imageSrc: "https://m.media-amazon.com/images/I/71cekUgPFUL.SL1500.jpg",
        title: "Motorised Recliner",
        description: "Ergonomic furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
        price: 30999,
        ratings: 3.5,
        productName: "Modern Sofa",
        orders: 50,
        inStock: true,
        originalPrice: 29999,
        Brand: "FurnitureCo",
        Model: "Sofa 2024",
        Dimensions: "84''W x 36''D x 32''H",
        Material: "Fabric",
        Color: "Gray",
        Warranty: "2 years",
        Size:  "Single-Seater",
        mainimage: 'https://m.media-amazon.com/images/I/81HfRhFqYPL.SL1500.jpg',
        alt: 'Motorised Recliner',
        thumbnailImages: [
            'https://m.media-amazon.com/images/I/81TJ0KRCnBL.SL1500.jpg',
            'https://m.media-amazon.com/images/I/81wMwfGYk7L.SL1500.jpg',
            'https://m.media-amazon.com/images/I/71aIeyLPjtL.SL1500.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/JnX4IY-ZW0U',
        faq: [
    {
        question: "What are the dimensions of the Motorised Recliner?",
        answer: "The dimensions of the Motorised Recliner are 84''W x 36''D x 32''H."
    },
    {
        question: "What material is used in the Motorised Recliner?",
        answer: "The Motorised Recliner is made of Fabric material."
    },
    {
        question: "What colors are available for the Motorised Recliner?",
        answer: "The Motorised Recliner is available in Gray, Blue, Beige, and Black colors."
    },
    {
        question: "What is the warranty period for the Motorised Recliner?",
        answer: "The Motorised Recliner comes with a 2-year warranty."
    },
    {
        question: "What sizes are available for the Motorised Recliner?",
        answer: "The Motorised Recliner is available in 3-Seater, 2-Seater, and Single-Seater sizes."
    }
]



    },
    {
        categoryId:2,
        productId: 2,

        imageSrc: "https://m.media-amazon.com/images/I/61o+TmqKoSL.SL1080.jpg",
        title: "UHUD CRAFTS",
        description: "Furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
        price: 20000,
        ratings: 3,
        productName: "Modern Sofa",
        orders: 50,
        inStock: true,
        originalPrice: 29999,
        Brand: "FurnitureCo",
        Model: "Sofa 2024",
        Dimensions: "84''W x 36''D x 32''H",
        Material: "Fabric",
        Color:  "Black",
        Warranty: "2 years",
        Size:  "2-Seater",
        mainimage: 'https://m.media-amazon.com/images/I/51nBL8hPvlL.SL1022.jpg',
        alt: 'Sofa',
        thumbnailImages: [

            'https://m.media-amazon.com/images/I/31KEezxJOsL.jpg',
            'https://m.media-amazon.com/images/I/31JOOSK75YL.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/mLFxCFR3bR0',
        faq: [
    {
        question: "What are the dimensions of the Modern Sofa (UHUD CRAFTS)?",
        answer: "The dimensions of the Modern Sofa (UHUD CRAFTS) are 84''W x 36''D x 32''H."
    },
    {
        question: "What material is used in the Modern Sofa (UHUD CRAFTS)?",
        answer: "The Modern Sofa (UHUD CRAFTS) is made of Fabric material."
    },
    {
        question: "What colors are available for the Modern Sofa (UHUD CRAFTS)?",
        answer: "The Modern Sofa (UHUD CRAFTS) is available in Gray, Blue, Beige, and Black colors."
    },
    {
        question: "What is the warranty period for the Modern Sofa (UHUD CRAFTS)?",
        answer: "The Modern Sofa (UHUD CRAFTS) comes with a 2-year warranty."
    },
    {
        question: "What sizes are available for the Modern Sofa (UHUD CRAFTS)?",
        answer: "The Modern Sofa (UHUD CRAFTS) is available in 3-Seater, 2-Seater, and Single-Seater sizes."
    }
]



    },
    {
        categoryId:2,
        productId: 3,

        imageSrc: "https://m.media-amazon.com/images/I/51fOjAfVLYL.SX569.jpg",
        title: "Callas Table",
        description: "Computer Desk Home/Office Desk 29.52 Inch Height Writing Modern Simple Study Desk | Sturdy Small Desks for Small Spaces",
        price: "3,000",
        ratings: 4,
        productName: "tables",
        orders: 50,
        inStock: true,
        originalPrice: 29999,
        Brand: "FurnitureCo",
        Model: "Sofa 2024",
        Dimensions: "84''W x 36''D x 32''H",
        Material: "Fabric",
        Color:  "Black",
        Warranty: "2 years",
        Size: "3-Seater",
        mainimage: 'https://m.media-amazon.com/images/I/51fOjAfVLYL.SX569.jpg',
        alt: 'table',
        thumbnailImages: [
            'https://m.media-amazon.com/images/I/A1xYAO9YGNL.SL1500.jpg',
            'https://m.media-amazon.com/images/I/51fOjAfVLYL.SX569.jpg',
            'https://m.media-amazon.com/images/I/71ZEoHN8bbL.SL1500.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/SZHlwbIBl6o',
        faq: [
    {
        question: "What are the dimensions of the Callas Table?",
        answer: "The dimensions of the Callas Table are 84''W x 36''D x 32''H."
    },
    {
        question: "What material is used in the Callas Table?",
        answer: "The Callas Table is made of Fabric material."
    },
    {
        question: "What colors are available for the Callas Table?",
        answer: "The Callas Table is available in Gray, Blue, Beige, and Black colors."
    },
    {
        question: "What is the warranty period for the Callas Table?",
        answer: "The Callas Table comes with a 2-year warranty."
    },
    {
        question: "What sizes are available for the Callas Table?",
        answer: "The Callas Table is available in 3-Seater, 2-Seater, and Single-Seater sizes."
    }
]


    },
    {
        categoryId: 2,
        productId: 4,
        imageSrc: "https://m.media-amazon.com/images/I/513I7-J-HqL.SL1302.jpg",
        title: "UHUD CRAFTS",
        description: "Ergonomic furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
        price: "1,999",
        ratings: 4,
        productName: "Modern Sofa",
        orders: 50,
        inStock: true,
        originalPrice: 29999,
        Brand: "FurnitureCo",
        Model: "Sofa 2024",
        Dimensions: "84''W x 36''D x 32''H",
        Material: "Fabric",
        Color: "Gray",
        Warranty: "2 years",
        Size: "Single-Seater",
        mainimage: 'https://m.media-amazon.com/images/I/513I7-J-HqL.SL1302.jpg',
        alt: 'table',
        thumbnailImages: [
            'https://m.media-amazon.com/images/I/71DFNnTNrLL.SL1432.jpg',
            'https://m.media-amazon.com/images/I/815DNhAKreL.SL1500.jpg',
            'https://m.media-amazon.com/images/I/51lZajKQQmL.SL1406.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/mjysBqocfdc',
        faq: [
    {
        question: "What are the dimensions of the Modern Sofa (UHUD CRAFTS)?",
        answer: "The dimensions of the Modern Sofa (UHUD CRAFTS) are 84''W x 36''D x 32''H."
    },
    {
        question: "What material is used in the Modern Sofa (UHUD CRAFTS)?",
        answer: "The Modern Sofa (UHUD CRAFTS) is made of Fabric material."
    },
    {
        question: "What colors are available for the Modern Sofa (UHUD CRAFTS)?",
        answer: "The Modern Sofa (UHUD CRAFTS) is available in Gray, Blue, Beige, and Black colors."
    },
    {
        question: "What is the warranty period for the Modern Sofa (UHUD CRAFTS)?",
        answer: "The Modern Sofa (UHUD CRAFTS) comes with a 2-year warranty."
    },
    {
        question: "What sizes are available for the Modern Sofa (UHUD CRAFTS)?",
        answer: "The Modern Sofa (UHUD CRAFTS) is available in 3-Seater, 2-Seater, and Single-Seater sizes."
    }
]



    }
];

export const address =[
    {
        id: 1,
        category:"Home",
        name: "John Doe",
        address: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA",
        zipcode: "10001",
        phone: "123-456-7890",
    },
    {
        id: 2,
        name: "Jane Smith",
        category:"Home",
        address: "456 Park Ave",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        zipcode: "90001",
        phone: "000000000000",
    },
    {
        id: 3,
        name: "Bob Johnson",
        category:"Office",
        address: "789 Elm St",
        city: "Chicago",
        state: "IL",
        country: "USA",
        zipcode: "60601",
        phone: "000000000000",
    },
    
]

export const Beautyproductcard = [
    {
        categoryId:3,
        productId: 1,
        imageSrc:"https://m.media-amazon.com/images/I/41GYfdZdqlL.SL1080.jpg",
        title:"L’Oréal Paris Glycolic Bright Dark Circle Eye Serum ",
        description:"L’Oréal Paris Glycolic Bright Dark Circle Eye Serum is a powerful formula that helps to reduce the appearance of dark circles and puffiness around the eyes. It contains glycolic acid, which exfoliates the skin and helps to brighten the under-eye area.",
        price: 999,
        ratings: 4.5,
        productName: "Eye Serum",
        orders: 50,
        inStock: true,
        originalPrice: 2999,
        Brand: "L’Oréal Paris",
        Model: "Eye Serum",
        SkinType: "All Skin Types",
        Ingredients: "Glycolic Acid",
        Benefits: "Reduces dark circles and puffiness",
        Content: "30ml",
        mainimage: 'https://m.media-amazon.com/images/I/41GYfdZdqlL.SL1080.jpg',
        alt: 'Eye Serum',
        thumbnailImages: [
            'https://m.media-amazon.com/images/I/41GYfdZdqlL.SL1080.jpg',
            'https://m.media-amazon.com/images/I/51-d41VPMUL.SL1080.jpg',
            'https://m.media-amazon.com/images/I/51xw6CODe0L.SL1080.jpg',
            ],
        iframeSrc: 'https://www.youtube.com/embed/XR8064I49V0 ',
        faq: [
    {
        question: "What are the key ingredients in the L’Oréal Paris Glycolic Bright Dark Circle Eye Serum?",
        answer: "The key ingredient in the L’Oréal Paris Glycolic Bright Dark Circle Eye Serum is Glycolic Acid, which helps to exfoliate the skin and brighten the under-eye area."
    },
    {
        question: "How do I use the L’Oréal Paris Glycolic Bright Dark Circle Eye Serum?",
        answer: "To use the L’Oréal Paris Glycolic Bright Dark Circle Eye Serum, apply a small amount to the under-eye area using the applicator or your fingertips. Gently pat the serum into the skin until fully absorbed. Use daily for best results, preferably at night."
    },
    {
        question: "Is the L’Oréal Paris Glycolic Bright Dark Circle Eye Serum suitable for all skin types?",
        answer: "Yes, the L’Oréal Paris Glycolic Bright Dark Circle Eye Serum is suitable for all skin types. It is formulated to be gentle on the skin while providing effective results in reducing dark circles and puffiness."
    },
    {
        question: "What sizes are available for the L’Oréal Paris Glycolic Bright Dark Circle Eye Serum?",
        answer: "The L’Oréal Paris Glycolic Bright Dark Circle Eye Serum is available in three sizes: 15ml, 30ml, and 50ml."
    },
    {
        question: "How soon can I expect to see results with the L’Oréal Paris Glycolic Bright Dark Circle Eye Serum?",
        answer: "Results can vary from person to person, but many users report seeing improvements in the appearance of dark circles and puffiness within a few weeks of regular use. For best results, use the serum consistently as part of your daily skincare routine."
    }
]

    },
    {
        categoryId:3,
        productId: 2,
        imageSrc:"https://m.media-amazon.com/images/I/41f27dWPuIL.jpg",
        title:"Kimirica Love Story Luxury Bath and Body Care Gift set",
        description:"Kimirica Love Story Luxury Bath and Body Care Gift set is a luxurious gift set that includes a bath and body care gift set, a bath and body care gift set, and a bath and body care gift set.",
        price: 1999,
        ratings: 4.5,
        productName: "Bath and Body Care Gift set",
        orders: 50,
        inStock: true,
        originalPrice: 2999,
        Brand: "Kimirica",
        Model: "Bath and Body Care Gift set",
        SkinType: "All Skin Types",
        Ingredients: "Glycolic Acid",
        Benefits: "Reduces dark circles and puffiness",
        Content: "15ml",
        mainimage:"https://m.media-amazon.com/images/I/81-vM4ThdfL.SL1500.jpg",
        alt: 'Bath and Body Care Gift set',
        thumbnailImages:[
            'https://m.media-amazon.com/images/I/81-vM4ThdfL.SL1500.jpg',
            'https://m.media-amazon.com/images/I/81KMuhWPx1L.SL1500.jpg',
            'https://m.media-amazon.com/images/I/41MqC8d2XqL.jpg',
        ],
        iframeSrc: 'https://www.youtube.com/embed/XR8064I49V0 ',
        faq: [
    {
        question: "What products are included in the Kimirica Love Story Luxury Bath and Body Care Gift Set?",
        answer: "The Kimirica Love Story Luxury Bath and Body Care Gift Set includes a selection of luxurious bath and body care products designed to provide a pampering experience."
    },
    {
        question: "Is the Kimirica Love Story Luxury Bath and Body Care Gift Set suitable for all skin types?",
        answer: "Yes, the Kimirica Love Story Luxury Bath and Body Care Gift Set is suitable for all skin types."
    },
    {
        question: "What are the main benefits of using the Kimirica Love Story Luxury Bath and Body Care Gift Set?",
        answer: "The main benefits of the Kimirica Love Story Luxury Bath and Body Care Gift Set include moisturizing and nourishing the skin, leaving it feeling soft and refreshed."
    },
    {
        question: "Are the products in the Kimirica Love Story Luxury Bath and Body Care Gift Set cruelty-free?",
        answer: "Yes, all products in the Kimirica Love Story Luxury Bath and Body Care Gift Set are cruelty-free."
    },
    {
        question: "How can I use the Kimirica Love Story Luxury Bath and Body Care Gift Set for best results?",
        answer: "For best results, follow the instructions provided with each product in the Kimirica Love Story Luxury Bath and Body Care Gift Set. Use the body wash and body lotion daily to keep your skin clean and hydrated."
    }
]

    }
    ];
export const Clothingproductcard = [
    {
        categoryId: 4,
        productId: 1,
        imageSrc: "https://m.media-amazon.com/images/I/61ThK8RnMjL.AC_UL480_FMwebp_QL65.jpg",
        title: "LEOTUDE\n" +
            "Regular Fit Half Sleeve Round Neck Dri-Fit Tshirt for Men's",
        description: "LEOTUDE Regular Fit Half Sleeve Round Neck",
        price: 499,
        ratings: 4.5,
        productName: "Tshirt",
        orders: 50,
        inStock: true,
        originalPrice: 2999,
        Brand: "LEOTUDE",
        Material: 100 % "Cotton",
        Model: "Tshirt",
        Size: "XL",
        Color: "Black",
        mainimage: "https://m.media-amazon.com/images/I/61ThK8RnMjL.SX679.jpg",
        alt: 'Tshirt',
        thumbnailImages: [
            'https://m.media-amazon.com/images/I/519YGNGMdaL.SX679.jpg',
            'https://m.media-amazon.com/images/I/51-mIQWZGDL.SX679.jpg',
            'https://m.media-amazon.com/images/I/41rc7sSLVqL.jpg'
        ],
        iframeSrc: 'https://www.youtube.com/embed/XR8064I49V0 ',
        faq: [
    {
        question: "What material is the LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt made of?",
        answer: "The LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt is made of 100% cotton."
    },
    {
        question: "What sizes are available for the LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt?",
        answer: "The LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt is available in sizes S, M, L, and XL."
    },
    {
        question: "What colors are available for the LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt?",
        answer: "The LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt is available in Black and Blue."
    },
    {
        question: "Is the LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt suitable for workouts?",
        answer: "Yes, the LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt is designed to be suitable for workouts and other physical activities."
    },
    {
        question: "How should I care for the LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt?",
        answer: "To care for the LEOTUDE Regular Fit Half Sleeve Round Neck Dri-Fit T-shirt, machine wash it in cold water with similar colors and tumble dry on low heat."
    }
]

    },
    {
        categoryId: 4,
        productId: 2,
        imageSrc: "https://m.media-amazon.com/images/I/41rc7sSLVqL.jpg",
        title: "INKAST Men's Slim Fit Denim Shirt",
        description: "INKAST Men's Slim Fit Denim Shirt",

        price: 499,
        ratings: 4.5,
        productName: "Shirt",
        orders: 50,
        inStock: true,
        originalPrice: 2999,
        Brand: "INKAST",
        Material: 100 % "Cotton",
        Model: "Shirt",
        Size:  "L",
        Color: "Blue",
        mainimage: "https://m.media-amazon.com/images/I/51-mIQWZGDL.SX679.jpg",
        alt: 'Shirt',
        thumbnailImages:[
            'https://m.media-amazon.com/images/I/71StoE+5osL.SX569.jpg',
            'https://m.media-amazon.com/images/I/71StoE+5osL.SX569.jpg',
        ],
        iframeSrc: 'https://www.youtube.com/embed/XR8064I49V0 ',
        
    faq: [
        {
            question: "What material is the INKAST Men's Slim Fit Denim Shirt made of?",
            answer: "The INKAST Men's Slim Fit Denim Shirt is made of 100% cotton."
        },
        {
            question: "What sizes are available for the INKAST Men's Slim Fit Denim Shirt?",
            answer: "The INKAST Men's Slim Fit Denim Shirt is available in sizes S, M, L, and XL."
        },
        {
            question: "What colors are available for the INKAST Men's Slim Fit Denim Shirt?",
            answer: "The INKAST Men's Slim Fit Denim Shirt is available in Black and Blue."
        },
        {
            question: "Is the INKAST Men's Slim Fit Denim Shirt machine washable?",
            answer: "Yes, the INKAST Men's Slim Fit Denim Shirt is machine washable. It is recommended to wash it in cold water with similar colors and tumble dry on low heat."
        },
        {
            question: "What is the price of the INKAST Men's Slim Fit Denim Shirt?",
            answer: "The price of the INKAST Men's Slim Fit Denim Shirt is ₹499."
        }
    ]
}

    ];

    export const GeneralProductCard = [
        
        {
            categoryId: 4,
            productId: 1,
            imageSrc: "https://m.media-amazon.com/images/I/61ThK8RnMjL._AC_UL480_FMwebp_QL65_.jpg",
            title: "LEOTUDE\n" +
                "Regular Fit Half Sleeve Round Neck Dri-Fit Tshirt for Men's",
            description: "LEOTUDE Regular Fit Half Sleeve Round Neck",
            price: 499,
            ratings: 4.5,
            productName: "Tshirt",
            orders: 50,
            inStock: true,
            originalPrice: 2999,
            Brand: "LEOTUDE",
            Material: 100 % "Cotton",
            Model: "Tshirt",
            Size: ["S","M", "L", "XL"],
            Color: ["Black","Blue"],
            mainimage: "https://m.media-amazon.com/images/I/61ThK8RnMjL._SX679_.jpg",
            alt: 'Tshirt',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/519YGNGMdaL._SX679_.jpg',
                'https://m.media-amazon.com/images/I/51-mIQWZGDL._SX679_.jpg',
                'https://m.media-amazon.com/images/I/41rc7sSLVqL.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/XR8064I49V0 '
        },
        {
            categoryId: 4,
            productId: 2,
            imageSrc: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/w/t/c/s-off-road-print-loomenz-original-imaggtjvmt8yfwf7.jpeg",
            title: "INKAST Men's Slim Fit Denim T-Shirt",
            description: "INKAST Men's Slim Fit Denim T-Shirt",
    
            price: 499,
            ratings: 4.5,
            productName: "Shirt",
            orders: 50,
            inStock: true,
            originalPrice: 2999,
            Brand: "INKAST",
            Material: 100 % "Cotton",
            Model: "Shirt",
            Size: ["S","M", "L", "XL"],
            Color: ["Black","Blue"],
            mainimage: "https://m.media-amazon.com/images/I/51-mIQWZGDL._SX679_.jpg",
            alt: 'Shirt',
            thumbnailImages:[
                'https://m.media-amazon.com/images/I/71StoE+5osL._SX569_.jpg',
                'https://m.media-amazon.com/images/I/71StoE+5osL._SX569_.jpg',
            ],
            iframeSrc: 'https://www.youtube.com/embed/XR8064I49V0 '
    
        },{
            categoryId:2,
            productId: 1,
    
            imageSrc: "https://m.media-amazon.com/images/I/71cekUgPFUL.SL1500.jpg",
            title: "Motorised Recliner",
            description: "Ergonomic furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
            price: 30999,
            ratings: 3.5,
            productName: "Modern Sofa",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/81HfRhFqYPL._SL1500_.jpg',
            alt: 'Motorised Recliner',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/81TJ0KRCnBL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81wMwfGYk7L._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71aIeyLPjtL._SL1500_.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/JnX4IY-ZW0U'
    
    
        },
        {
            categoryId:2,
            productId: 2,
    
            imageSrc: "https://m.media-amazon.com/images/I/61o+TmqKoSL.SL1080.jpg",
            title: "UHUD CRAFTS",
            description: "Furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
            price: 20000,
            ratings: 3,
            productName: "Modern Sofa",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/51nBL8hPvlL._SL1022_.jpg',
            alt: 'Sofa',
            thumbnailImages: [
    
                'https://m.media-amazon.com/images/I/31KEezxJOsL.jpg',
                'https://m.media-amazon.com/images/I/31JOOSK75YL.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/mLFxCFR3bR0'
    
    
        },
        {
            categoryId:2,
            productId: 3,
    
            imageSrc: "https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg",
            title: "Callas Table",
            description: "Computer Desk Home/Office Desk 29.52 Inch Height Writing Modern Simple Study Desk | Sturdy Small Desks for Small Spaces",
            price: "3,000",
            ratings: 4,
            productName: "tables",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg',
            alt: 'table',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/A1xYAO9YGNL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg',
                'https://m.media-amazon.com/images/I/71ZEoHN8bbL._SL1500_.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/SZHlwbIBl6o'
    
        },
        {
            categoryId: 2,
            productId: 4,
            imageSrc: "https://m.media-amazon.com/images/I/513I7-J-HqL._SL1302_.jpg",
            title: "UHUD CRAFTS",
            description: "Ergonomic furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
            price: "1,999",
            ratings: 4,
            productName: "Modern Sofa",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/513I7-J-HqL._SL1302_.jpg',
            alt: 'table',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/71DFNnTNrLL._SL1432_.jpg',
                'https://m.media-amazon.com/images/I/815DNhAKreL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/51lZajKQQmL._SL1406_.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/mjysBqocfdc'
    
    
        }, {
            categoryId:1,
            productId: 1,
    
            imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
            title: "I phone 15 plus 5G",
            description: "Triple-lens rear camera system with 48MP main camera, 12MP wide camera, 12MP ultra-wide camera, and 12MP telephoto camera",
            price: 77499,
            ratings: 4,
            productName: "iPhone15 plus 5G",
            orders: 120,
            inStock: true,
            originalPrice: 84999,
            Brand: "Apple",
            Model: "iPhone 15 plus 5G",
            Displaysize: "6.7-inch Super Retina XDR display",
            Processors: "A15 Bionic chip",
            Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
            Battery: "3,095mAh battery with MagSafe charging",
            OperatingSystem: "iOS 15",
            Color: ["Red ","  Blue ", " Green ", "Yellow",  " pink"],
            Warranty: "1 year",
            Storage: ["128GB ", "256GB ","512GB"],
            mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438',
            alt: 'iPhone 15 plus ',
            thumbnailImages: [
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-3-202309_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1695316289152',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011173388',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-plus-digitalmat-gallery-7-202403?wid=728&hei=666&fmt=png-alpha&.v=1708120679559',
            ],
            iframeSrc: 'https://www.youtube.com/embed/XHTrLYShBRQ'
        },
        {
            categoryId:1,
            productId: 2,
            imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387",
            title: "I phone 15 pro",
            description: "Super Retina XDR display 15.54 cm / 6.1″ (diagonal) all‑screen OLED display 2556x1179-pixel resolution at 460 ppi",
            price: 134900,
            ratings: 3,
            productName: "iPhone15 pro 5G",
            orders: 120,
            inStock: true,
            originalPrice: 159999,
            Brand: "Apple",
            Model: "iPhone 15 pro",
            Displaysize: "6.9-inch Super Retina XDR display",
            Processors: "A16 Bionic chip",
            Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
            Battery: "3,095mAh battery with MagSafe charging",
            OperatingSystem: "iOS 16",
            Color: ["Red ","  Blue ", " Green ", "Yellow", " " ," pink"],
            Warranty: "1 year",
            Storage: ["128GB ", "256GB ", "512GB"],
            mainimage: 'https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/1/i/x/-original-imagtc6fhhtqjnr9.jpeg?q=70&crop=false',
            alt: 'iPhone 15 pro',
            thumbnailImages: [
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
            ],
            iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA'
    
    
        },
        {
            categoryId:1,
            productId: 3,
    
            imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-purple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660691647082",
            title: "I phone 14",
            description: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
            price: 87999,
            ratings: 3,
            productName: "iPhone 14 ",
            orders: 120,
            inStock: true,
            originalPrice: 99999,
            Brand: "Apple",
            Model: "iPhone 14",
            Displaysize: "6.7-inch Super Retina XDR display",
            Processors: "A15 Bionic chip",
            Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
            Battery: "3,095mAh battery with MagSafe charging",
            OperatingSystem: "iOS 15",
            Color: ["Red ","  Blue ", " Green ", "Yellow", " " ," pink"],
            Warranty: "1 year",
            Storage: ["128GB ", "256GB ","512GB"],
            mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
            alt: 'iPhone 15 pro max',
            thumbnailImages: [
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
            ],
            iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA'
        },
        {
            categoryId:1,
            productId: 4,
            imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346851387",
            title: "I phone 15 pro max",
            description: "Super Retina XDR display 17.00 cm / 6.7″ (diagonal) all‑screen OLED display 2796x1290-pixel resolution at 460 ppi",
            price: 159900,
            ratings: 3,
            productName: "iPhone15 pro max",
            orders: 120,
            inStock: true,
            originalPrice: 175000,
            Brand: "Apple",
            Model: "iPhone 15 pro max",
            Displaysize: "6.11-inch Super Retina XDR display",
            Processors: "A15 Bionic chip",
            Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
            Battery: "4,500mAh battery with MagSafe charging",
            OperatingSystem: "iOS 17",
            Color: ["Red ","  Blue ", " Green ", "Yellow", " " ," pink"],
            Warranty: "1 year",
            Storage: ["128GB ", "256GB  ", "512GB"],
            mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081542150',
            alt: 'iPhone 15 pro max',
            thumbnailImages: [
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693081541434',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1693081542280',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-6-202309?wid=728&hei=666&fmt=png-alpha&.v=1699461408004'
            ],
            iframeSrc: 'https://www.youtube.com/embed/xqyUdNxWazA'
    
        },
        {
            categoryId:1,
            productId: 5,
    
            imageSrc: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-1-202309_GEO_EMEA?wid=728&hei=666&fmt=png-alpha&.v=1693346853438",
            title: "I phone 15 ",
            description: "Super Retina XDR display 17.00 cm / 6.7″ (diagonal) all‑screen OLED display 2796x1290-pixel resolution at 460 ppi",
            price: 66999,
            ratings: 4.5,
            productName: "iPhone15 ",
            orders: 120,
            inStock: true,
            originalPrice: 74999,
            Brand: "Apple",
            Model: "iPhone 15",
            Displaysize: "6.8-inch Super Retina XDR display",
            Processors: "A15 Bionic chip",
            Camera: "Triple-lens rear camera system with 12MP wide camera, 12MP ultrawide camera, and 12MP telephoto camera",
            Battery: "3,095mAh battery with MagSafe charging",
            OperatingSystem: "iOS 15",
            Color: ["Red ","  Blue ", " Green ", "Yellow", " " ," pink"],
            Warranty: "1 year",
            Storage: ["128GB ", "256GB ", "512GB"],
            mainimage: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169058',
            alt: 'iPhone 15 ',
            thumbnailImages: [
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15plus-digitalmat-gallery-3-202309_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1695316289152',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-digitalmat-gallery-5-202309?wid=728&hei=666&fmt=png-alpha&.v=1693011169178',
                'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-plus-digitalmat-gallery-7-202403?wid=728&hei=666&fmt=png-alpha&.v=1708120679559'
            ],
            iframeSrc: 'https://www.youtube.com/embed/XHTrLYShBRQ'
    
    
        }
        
    ];
    export const DiscountProductCard = [
        
        {
            categoryId:2,
            productId: 1,
    
            imageSrc: "https://m.media-amazon.com/images/I/71cekUgPFUL.SL1500.jpg",
            title: "Motorised Recliner",
            description: "Ergonomic furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
            price: 30999,
            ratings: 3.5,
            discount: "32% OFF",
      dic: "Limited Time Deal ",
            productName: "Modern Sofa",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/81HfRhFqYPL._SL1500_.jpg',
            alt: 'Motorised Recliner',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/81TJ0KRCnBL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81wMwfGYk7L._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/71aIeyLPjtL._SL1500_.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/JnX4IY-ZW0U'
    
    
        },
        {
            categoryId:2,
            productId: 2,
    
            imageSrc: "https://m.media-amazon.com/images/I/61o+TmqKoSL.SL1080.jpg",
            title: "UHUD CRAFTS",
            description: "Furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
            price: 20000,
            ratings: 3,
            discount: "32% OFF",
      dic: "Limited Time Deal ",
            productName: "Modern Sofa",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/51nBL8hPvlL._SL1022_.jpg',
            alt: 'Sofa',
            thumbnailImages: [
    
                'https://m.media-amazon.com/images/I/31KEezxJOsL.jpg',
                'https://m.media-amazon.com/images/I/31JOOSK75YL.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/mLFxCFR3bR0'
    
    
        },
        {
            categoryId:2,
            productId: 3,
    
            imageSrc: "https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg",
            title: "Callas Table",
            description: "Computer Desk Home/Office Desk 29.52 Inch Height Writing Modern Simple Study Desk | Sturdy Small Desks for Small Spaces",
            price: "3,000",
            discount: "52% OFF",
      dic: "Limited Time Deal ",
            ratings: 4,
            productName: "tables",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg',
            alt: 'table',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/A1xYAO9YGNL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg',
                'https://m.media-amazon.com/images/I/71ZEoHN8bbL._SL1500_.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/SZHlwbIBl6o'
    
        },
        {
            categoryId: 2,
            productId: 4,
            imageSrc: "https://m.media-amazon.com/images/I/513I7-J-HqL._SL1302_.jpg",
            title: "UHUD CRAFTS",
            description: "Ergonomic furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
            price: "1,999",
            ratings: 4,
            discount: "12% OFF",
      dic: "Limited Time Deal ",
            productName: "Modern Sofa",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/513I7-J-HqL._SL1302_.jpg',
            alt: 'table',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/71DFNnTNrLL._SL1432_.jpg',
                'https://m.media-amazon.com/images/I/815DNhAKreL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/51lZajKQQmL._SL1406_.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/mjysBqocfdc'
    
    
        },
        
    ];
    export const NewProductCard = [
        
        {
            categoryId:3,
            productId: 1,
            imageSrc:"https://m.media-amazon.com/images/I/41GYfdZdqlL._SL1080_.jpg",
            title:"L’Oréal Paris Glycolic Bright Dark Circle Eye Serum ",
            description:"L’Oréal Paris Glycolic Bright Dark Circle Eye Serum is a powerful formula that helps to reduce the  dark circles ",
            price: 999,
            ratings: 4.5,
            productName: "Eye Serum",
            orders: 50,
            inStock: true,
            originalPrice: 2999,
            Brand: "L’Oréal Paris",
            Model: "Eye Serum",
            SkinType: "All Skin Types",
            Ingredients: "Glycolic Acid",
            Benefits: "Reduces dark circles and puffiness",
            Content: ["15ml","30ml", "50ml"],
            mainimage: 'https://m.media-amazon.com/images/I/41GYfdZdqlL._SL1080_.jpg',
            alt: 'Eye Serum',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/41GYfdZdqlL._SL1080_.jpg',
                'https://m.media-amazon.com/images/I/51-d41VPMUL._SL1080_.jpg',
                'https://m.media-amazon.com/images/I/51xw6CODe0L._SL1080_.jpg',
                ],
            iframeSrc: 'https://www.youtube.com/embed/XR8064I49V0 '
    
        },
        
        {
            categoryId:2,
            productId: 3,
    
            imageSrc: "https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg",
            title: "Callas Table",
            description: "Computer Desk Home/Office Desk 29.52 Inch Height Writing Modern Simple Study Desk | Sturdy Small Desks for Small Spaces",
            price: "3,000",
            discount: "52% OFF",
      dic: "Limited Time Deal ",
            ratings: 4,
            productName: "tables",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg',
            alt: 'table',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/A1xYAO9YGNL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/51fOjAfVLYL._SX569_.jpg',
                'https://m.media-amazon.com/images/I/71ZEoHN8bbL._SL1500_.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/SZHlwbIBl6o'
    
        },
        {
            categoryId: 2,
            productId: 4,
            imageSrc: "https://m.media-amazon.com/images/I/513I7-J-HqL._SL1302_.jpg",
            title: "UHUD CRAFTS",
            description: "Ergonomic furniture or equipment is designed in a way that makes it comfortable and effective for people who use it for their work",
            price: "1,999",
            ratings: 4,
            discount: "12% OFF",
      dic: "Limited Time Deal ",
            productName: "Modern Sofa",
            orders: 50,
            inStock: true,
            originalPrice: 29999,
            Brand: "FurnitureCo",
            Model: "Sofa 2024",
            Dimensions: "84''W x 36''D x 32''H",
            Material: "Fabric",
            Color: ["Gray", "Blue", "Beige", "Black"],
            Warranty: "2 years",
            Size: ["3-Seater", "2-Seater", "Single-Seater"],
            mainimage: 'https://m.media-amazon.com/images/I/513I7-J-HqL._SL1302_.jpg',
            alt: 'table',
            thumbnailImages: [
                'https://m.media-amazon.com/images/I/71DFNnTNrLL._SL1432_.jpg',
                'https://m.media-amazon.com/images/I/815DNhAKreL._SL1500_.jpg',
                'https://m.media-amazon.com/images/I/51lZajKQQmL._SL1406_.jpg'
            ],
            iframeSrc: 'https://www.youtube.com/embed/mjysBqocfdc'
    
    
        },
        
    ];

   