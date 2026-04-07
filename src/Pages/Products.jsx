import React, { useState } from 'react'
import { faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { AllProducts } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Products.css'

const Products = () => {

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const sortedProducts = 
  [...AllProducts].sort((a, b) => {
    if (filter === 'LOW_TO_HIGH'){
      return (a.price || a.oldPrice) - (b.price || b.oldPrice)
    }
    if (filter === 'HIGH_TO_LOW'){
      return (b.price || b.oldPrice) - (a.price || a.oldPrice)
    } 

    if (filter === 'RATING'){
      return b.rating - a.rating
    } return 0;
  });

  return (
      <section id="products">
        <div className="all__products--container">
                    <h2 className="products__title">
                        All Products
                    </h2>
                  <select onChange={handleFilterChange} id="filter" defaultValue="DEFAULT">
                    <option value="DEFAULT" disabled>Sort by</option>
                    <option value="LOW_TO_HIGH" >Sort by Low to High</option>
                    <option value="HIGH_TO_LOW">Sort by High to Low</option>
                    <option value="RATING">Sort by Rating</option>
                  </select>
                </div>
      <div class="product__container">
        <div className="products">
          {sortedProducts.map((product) => (
            <div className="product__card" key={product.id}>
              <figure className="product__item">
                <img className="product" src={product.image} alt={product.name} />
              </figure>
              <h3 className="product__name">
                {product.name}
              </h3>
              <del className="old_product__price">${product.oldPrice.toFixed(2)}</del>
              <p className="product__price">${product.price.toFixed(2)}</p>
              <div className="product__rating">
                {new Array(5).fill(0).map((_, index) => 
                {
                  const starValue = index + 1;
                  if (starValue <= product.rating) {
                    return <FontAwesomeIcon key={index} icon={faStar} />;
                  } else if (starValue - 0.5 <= product.rating){
                    return <FontAwesomeIcon key={index} icon={faStarHalfAlt} />
                  } else {
                    return <FontAwesomeIcon key={index} icon={faStarRegular} />;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
        </div>
        </section>
        );
      };
        export default Products;