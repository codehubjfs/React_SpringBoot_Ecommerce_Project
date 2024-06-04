import React, { useState } from 'react';
import CustomVideo from './CustomVideo'; // Assuming the path to your CustomVideo component is correct
import '../card.css'; // Import CSS styles

function VideoContainer() {
    const [playingVideo, setPlayingVideo] = useState(null);

    // Define an array of video data
    const videos = [
        {
            title: "How to Register on SellerPanel",
            text: "Learn all about Horizon Seller registration, be it doubts regarding creating a Horizon Seller account or Horizon Selling charges.",
            image: require('../assets/images/seller4.png'), // Replace "image_url_1.jpg" with the actual image URL
            videoLink: "wS8-t8N_XpA"
            
        },
        {
            title: "Introduction to Supplier Panel ",
            text: "Learn all about setting up your online business on Horizon on the Supplier Panel, shipping products and order tracking.",
            buttonText: "Go somewhere else",
            image: require('../assets/images/seller5.png'),
            videoLink: "6r8J7cowYI8"
        },
        {
            title: "How to grow your online business",
            text: "Our business has grown beyond our imagination, getting upto 10,000 orders consistently during sale days.",
            buttonText: "Go somewhere different",
            image: require('../assets/images/seller6.jpg'), // Replace "image_url_3.jpg" with the actual image URL
            videoLink: "Sc_mTnZIeaA"
            
        }
    ];

    const playVideo = (videoLink) => {
        setPlayingVideo(videoLink);
    };

    const stopVideo = () => {
        setPlayingVideo(null);
    };

    return (
        <div className="row mb-5">
            <div className="col-12 text-center mb-3">
                <h1 style={{ fontSize: '22px' }}>Learn How to Sell Your Products on Horizon</h1>
            </div>
            {/* Map through the video data array and render CustomVideo component */}
            {videos.map((video, index) => (
                <div key={index} className="col-md-4 mb-3">
                    <CustomVideo
                        title={video.title}
                        text={video.text}
                        image={video.image}
                        videoUrl={video.videoLink}
                        play={() => playVideo(video.videoLink)}
                    />
                </div>
            ))}
            {playingVideo && (
                <div className="modal" onClick={stopVideo}>
                    <div className="modal-content">
                        <video controls autoPlay>
                            <source src={`https://www.youtube.com/embed/${playingVideo}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideoContainer;
