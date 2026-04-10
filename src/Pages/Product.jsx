import React from 'react'
import { useParams } from 'react-router-dom';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt, faStar, faStar as faStarRegular } from '@fortawesome/free-solid-svg-icons';


const Product = ({ AllProducts }) => {
    const { productId } = useParams();

    const product = AllProducts?.find((p) => String(p.id) === String(productId));

    if (!product) return <div>Product not found!</div>;
  return (
    <section id="product">
        <div className="product__container">
            <img className="product_image" src={product.image} alt={product.name} />
            <h1 className="product__name">{product.name}</h1>
            <h2 className="product__price">${product.price.toFixed(2)}</h2>
             <div className="product__rating">
                                    {new Array(5).fill(0).map((_, index) => {
                                        const starValue = index + 1;
                                        if (starValue <= product.rating) {
                                            return <FontAwesomeIcon key={index} icon={faStar} />;
                                        } else if (starValue - 0.5 <= product.rating) {
                                            return <FontAwesomeIcon key={index} icon={faStarHalfAlt} />
                                        } else {
                                            return <FontAwesomeIcon key={index} icon={faStarRegular} />;
                                        }
                                    })}
                                </div>
                                <div className="product__description--container">
                                    <p className="product__description">{product.description}</p>
                                </div>
            <button className="btn">Add To Cart</button>
        </div>
    </section>
    
  )
}


export default Product