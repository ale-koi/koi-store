import React, { useEffect } from 'react'
import '../styles/item.scss'
import { NavLink } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";



const Item = ({ product }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="item-card" id={product.id} key={product.id} data-aos="fade-up">
            <img src={product.pictureURL} />
            <div className='text'>
            <h2>{product.title}</h2>
            <h5>vol. {product.volume}</h5>
            <h4>${product.price}</h4>
            </div>
                {product.stock ? (<NavLink to={`/item/${product.id}`}><button>See more</button></NavLink>) : (<NavLink to={`/item/${product.id}`}><button>Sold Out</button></NavLink>)
                }
            
        </div>
    )
}

export default Item