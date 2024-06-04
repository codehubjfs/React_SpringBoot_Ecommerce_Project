import React from 'react';

function CircularImage({ image, factTitle, factContent, alignLeft, contentStyle }) {
  const imageStyle = {
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '50%',
  };

  const titleStyle = {
    fontWeight: '400', // Slightly bold
  };

  return (
    <div className="ui-row">
      {alignLeft ? (
        <>
          <div className="col-md-6">
            <h3 style={titleStyle}>{factTitle}</h3>
            <p style={contentStyle}>{factContent}</p> {/* Apply contentStyle here */}
          </div>
          <div className="col-md-6">
            <div style={imageStyle}>
              <img src={image} alt="Fact Image" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-md-6 order-md-2">
            <h3 style={titleStyle}>{factTitle}</h3>
            <p style={contentStyle}>{factContent}</p> {/* Apply contentStyle here */}
          </div>
          <div className="col-md-6 order-md-1">
            <div style={imageStyle}>
              <img src={image} alt="Fact Image" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CircularImage;
