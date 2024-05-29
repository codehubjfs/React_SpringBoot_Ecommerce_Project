import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addProduct } from '../../slices/productSlice';

const BeautyProductForm = ({ subcategory }) => {
  const sellerDetails = useSelector(state => state.sellerDetails);
  const sellerId = sellerDetails ? sellerDetails.sellerId : null;

  const [formData, setFormData] = useState({
    productTitle: '',
    description: '',
    skinType: '',
    productBenefit: '',
    supplierId: sellerId,
    usedFor: '',
    brand: '',
    price: '',
    stock: '',
    itemWeight: '',
    mainImage: '',
    thumbnail1: '',
    thumbnail2: '',
    thumbnail3: '',
    thumbnail4: '',
    video: '',
    subCategory: subcategory
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      subCategory: subcategory
    }));
  }, [subcategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    switch (name) {
      case 'productTitle':
        newErrors.productTitle = value.trim() ? null : 'Product title is required';
        break;
      case 'description':
        newErrors.description = value.trim() ? null : 'Description is required';
        break;
      case 'skinType':
        newErrors.skinType = /^[A-Za-z\s]+$/.test(value) ? null : 'Skin type should contain only alphabets';
        break;
      case 'productBenefit':
        newErrors.productBenefit = /^[A-Za-z\s]+$/.test(value) ? null : 'Product benefit should contain only alphabets';
        break;
      case 'usedFor':
        newErrors.usedFor = /^[A-Za-z\s]+$/.test(value) ? null : 'Used for should contain only alphabets';
        break;
      case 'brand':
        newErrors.brand = /^[A-Za-z\s]+$/.test(value) ? null : 'Brand should contain only alphabets';
        break;
      case 'itemWeight':
        newErrors.itemWeight = /^[0-9]+$/.test(value) ? null : 'Item weight should contain only numeric characters';
        break;
      case 'price':
        newErrors.price = /^[0-9.]+$/.test(value) ? null : 'Price should contain only numeric characters';
        break;
      case 'stock':
        newErrors.stock = /^[0-9]+$/.test(value) ? null : 'Stock should contain only numeric characters';
        break;
      case 'mainImage':
      case 'thumbnail1':
      case 'thumbnail2':
      case 'thumbnail3':
      case 'thumbnail4':
      case 'video':
        newErrors[name] = value.trim() ? null : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFields = Object.entries(formData).filter(([key, value]) => typeof value === 'string' && value.trim() === '');

    if (emptyFields.length > 0) {
      const newErrors = { ...errors };
      emptyFields.forEach(([fieldName]) => {
        newErrors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      });
      setErrors(newErrors);
      return;
    }

    if (Object.values(errors).some(val => val !== null)) {
      return;
    }

    dispatch(addProduct({ category: 'beauty', productData: formData }));
    navigate('/dashboard/products');
  };

  return (
    <div>
      <h2>Add Beauty Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="productTitle" className="form-label">Product Title<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="productTitle" name="productTitle" value={formData.productTitle} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="productTitle">{errors.productTitle}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="description" className="form-label">Description<span style={{ color: 'red' }}>*</span></label>
            <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="1" style={{ resize: 'none' }}></textarea>
            <div className="titleError" style={{ color: 'red' }} data-field="description">{errors.description}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="skinType" className="form-label">Skin Type<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="skinType" name="skinType" value={formData.skinType} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="skinType">{errors.skinType}</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="productBenefit" className="form-label">Product Benefit<span style={{ color: 'red' }}>*</span></label>
            <input placeholder='eg.clear skin' type="text" className="form-control" id="productBenefit" name="productBenefit" value={formData.productBenefit} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="productBenefit">{errors.productBenefit}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="usedFor" className="form-label">Used For<span style={{ color: 'red' }}>*</span></label>
            <input type="text" placeholder='eg.face' className="form-control" id="usedFor" name="usedFor" value={formData.usedFor} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="usedFor">{errors.usedFor}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="brand" className="form-label">Brand<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="brand">{errors.brand}</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="itemWeight" className="form-label">Item Weight (ml/mg)<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="itemWeight" name="itemWeight" value={formData.itemWeight} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="itemWeight">{errors.itemWeight}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="mainImage" className="form-label">Main Image<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="mainImage" name="mainImage" value={formData.mainImage} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="mainImage">{errors.mainImage}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="thumbnail1" className="form-label">Thumbnail 1<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="thumbnail1" name="thumbnail1" value={formData.thumbnail1} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="thumbnail1">{errors.thumbnail1}</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="thumbnail2" className="form-label">Thumbnail 2<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="thumbnail2" name="thumbnail2" value={formData.thumbnail2} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="thumbnail2">{errors.thumbnail2}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="thumbnail3" className="form-label">Thumbnail 3<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="thumbnail3" name="thumbnail3" value={formData.thumbnail3} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="thumbnail3">{errors.thumbnail3}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="thumbnail4" className="form-label">Thumbnail 4<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="thumbnail4" name="thumbnail4" value={formData.thumbnail4} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="thumbnail4">{errors.thumbnail4}</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="price" className="form-label">Price<span style={{ color: 'red' }}>*</span></label>
            <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="price">
              {errors.price && <span>{errors.price}</span>}
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="stock" className="form-label">Stock Available<span style={{ color: 'red' }}>*</span></label>
            <input type="number" className="form-control" id="stock" name="stock" value={formData.stock} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="stock">
              {errors.stock && <span>{errors.stock}</span>}
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="video" className="form-label">Video<span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="video" name="video" value={formData.video} onChange={handleChange} />
            <div className="titleError" style={{ color: 'red' }} data-field="video">{errors.video}</div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/dashboard/products" className="active"><button type="button" className="btn btn-secondary">Cancel</button></Link>&nbsp;
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default BeautyProductForm;
